// content.js - Q&A Finder: Tự động highlight đáp án đúng trên trang kiểm tra

// ====== Cosine Similarity (giống popup.js) ======
function calculateSimilarity(text1, text2) {
  const normalize = (text) =>
    text.toLowerCase()
      .replace(/[^\w\sàáảãạăằắẳẵặâầấẩẫậèéẻẽẹêềếểễệìíỉĩịòóỏõọôồốổỗộơờớởỡợùúủũụưừứửữựỳýỷỹỵđ]/gi, '')
      .trim();

  const words1 = normalize(text1).split(/\s+/);
  const words2 = normalize(text2).split(/\s+/);
  const allWords = new Set([...words1, ...words2]);

  const v1 = {}, v2 = {};
  allWords.forEach(w => { v1[w] = 0; v2[w] = 0; });
  words1.forEach(w => v1[w]++);
  words2.forEach(w => v2[w]++);

  let dot = 0, mag1 = 0, mag2 = 0;
  allWords.forEach(w => {
    dot  += v1[w] * v2[w];
    mag1 += v1[w] ** 2;
    mag2 += v2[w] ** 2;
  });

  mag1 = Math.sqrt(mag1);
  mag2 = Math.sqrt(mag2);
  if (mag1 === 0 || mag2 === 0) return 0;
  return (dot / (mag1 * mag2)) * 100;
}

// ====== Kiểm tra một lựa chọn có khớp với đáp án không ======
function choiceMatchesAnswer(choiceText, answer) {
  const choiceNorm = choiceText.toLowerCase().replace(/[.,!?]$/g, '').trim();

  if (Array.isArray(answer)) {
    return answer.some(ans => {
      const ansNorm = ans.toLowerCase().replace(/[.,!?]$/g, '').trim();
      const sim = calculateSimilarity(choiceText, ans);
      return sim > 50 || ansNorm.includes(choiceNorm) || choiceNorm.includes(ansNorm);
    });
  }

  const ansNorm = answer.toLowerCase();
  const sim = calculateSimilarity(choiceText, answer);
  // Khớp cao hoặc đáp án chứa text lựa chọn
  return sim > 40 || ansNorm.includes(choiceNorm);
}

// ====== Sync DEFAULT_SAMPLES vào storage (merge, không mất câu hỏi cũ) ======
async function ensureSamplesInitialized() {
  if (typeof DEFAULT_SAMPLES === 'undefined' || DEFAULT_SAMPLES.length === 0) return;

  const data = await chrome.storage.local.get(['samples']);
  const storedSamples = data.samples || [];

  // Tìm các câu hỏi trong DEFAULT_SAMPLES chưa có trong storage
  const storedQuestions = new Set(
    storedSamples.map(s => s.question.trim().toLowerCase())
  );
  const missingSamples = DEFAULT_SAMPLES.filter(
    s => !storedQuestions.has(s.question.trim().toLowerCase())
  );

  if (storedSamples.length === 0 || missingSamples.length > 0) {
    const newEntries = missingSamples.map((sample, index) => ({
      id: Date.now() + index,
      question: sample.question,
      answer: sample.answer,
      createdAt: new Date().toISOString()
    }));

    const allSamples = [...storedSamples, ...newEntries];
    await chrome.storage.local.set({ samples: allSamples, initialized: true });
    console.log(`[Q&A Finder] Đã sync ${newEntries.length} câu hỏi mới vào storage`);
  }
}

// ====== Xóa highlight cũ (nếu chuyển câu) ======
function clearHighlights() {
  document.querySelectorAll('.question__choicesitem[data-qaf-highlighted]').forEach(item => {
    item.removeAttribute('style');
    item.removeAttribute('data-qaf-highlighted');
    const label = item.querySelector('.checkbox__label, .radio__label');
    if (label) {
      label.removeAttribute('style');
      label.querySelector('.qaf-check')?.remove();
    }
  });
}

// ====== Hàm highlight chính ======
async function autoHighlightAnswers() {
  // Kiểm tra trạng thái bật/tắt
  const { autoHighlightEnabled = false } = await chrome.storage.local.get(['autoHighlightEnabled']);
  if (!autoHighlightEnabled) return;

  // Tìm phần tử câu hỏi
  const questionEl =
    document.querySelector('[id^="question_body_"]') ||
    document.querySelector('.question__question p');

  if (!questionEl) return;

  const questionText = questionEl.textContent.trim();
  if (!questionText) return;

  // Đảm bảo samples đã được khởi tạo
  await ensureSamplesInitialized();

  // Đọc samples từ storage
  const { samples = [] } = await chrome.storage.local.get(['samples']);
  if (samples.length === 0) {
    console.warn('[Q&A Finder] Không có câu hỏi nào trong kho. Hãy mở popup extension trước.');
    return;
  }

  // Xếp hạng theo độ tương đồng
  const ranked = samples
    .map(s => ({ ...s, sim: calculateSimilarity(questionText, s.question) }))
    .sort((a, b) => b.sim - a.sim);

  const best = ranked[0];
  console.log(`[Q&A Finder] Câu hỏi khớp nhất: ${best.sim.toFixed(1)}% - "${best.question.substring(0, 70)}..."`);

  // Ngưỡng 50%: dưới mức này coi như câu hỏi không có trong kho
  if (best.sim < 50) {
    console.log('[Q&A Finder] Không tìm thấy câu hỏi khớp (< 50%), bỏ qua để tránh sai');
    return;
  }

  // Xóa highlight cũ
  clearHighlights();

  const choiceItems = document.querySelectorAll('.question__choicesitem');
  let count = 0;

  // Phân biệt radio (1 đáp án) và checkbox (nhiều đáp án)
  const isRadio = !!document.querySelector('.question__choices input[type="radio"]');

  // Helper: áp dụng highlight lên 1 item
  function applyHighlight(item, labelEl, score) {
    item.setAttribute('data-qaf-highlighted', 'true');
    labelEl.style.color = '#d32f2f';
    if (!item.querySelector('.qaf-check')) {
      const tick = document.createElement('span');
      tick.className = `qaf-check qaf-score-${score}`;
      tick.textContent = ` ✓ (${score.toFixed(0)}%)`;
      tick.style.cssText = 'color:#d32f2f; font-weight:700; font-size:14px; margin-left:6px;';
      labelEl.appendChild(tick);
    }
  }

  // Helper: tính điểm khớp giữa text lựa chọn và đáp án
  function scoreChoice(choiceText) {
    if (Array.isArray(best.answer)) {
      return Math.max(...best.answer.map(a => calculateSimilarity(choiceText, a)));
    }
    const sim = calculateSimilarity(choiceText, best.answer);
    const choiceNorm = choiceText.toLowerCase().replace(/[.,!?]$/g, '').trim();
    const ansNorm = best.answer.toLowerCase();
    // Cộng điểm nếu answer chứa nguyên text lựa chọn
    return (ansNorm.includes(choiceNorm) && choiceNorm.length > 10) ? Math.max(sim, 85) : sim;
  }

  if (isRadio) {
    // Radio: chỉ highlight lựa chọn có điểm cao NHẤT
    let bestItem = null, bestLabelEl = null, bestScore = 0;

    choiceItems.forEach(item => {
      const labelEl = item.querySelector('.checkbox__label, .radio__label');
      if (!labelEl) return;
      const score = scoreChoice(labelEl.textContent.trim());
      if (score > bestScore) {
        bestScore = score;
        bestItem = item;
        bestLabelEl = labelEl;
      }
    });

    if (bestItem && bestScore > 35) {
      applyHighlight(bestItem, bestLabelEl, bestScore);
      count = 1;
    }
  } else {
    // Checkbox: highlight tất cả lựa chọn đúng
    choiceItems.forEach(item => {
      const labelEl = item.querySelector('.checkbox__label, .radio__label');
      if (!labelEl) return;
      if (choiceMatchesAnswer(labelEl.textContent.trim(), best.answer)) {
        applyHighlight(item, labelEl, scoreChoice(labelEl.textContent.trim()));
        count++;
      }
    });
  }

  console.log(`[Q&A Finder] Đã highlight ${count} đáp án đúng (${isRadio ? 'radio' : 'checkbox'}), khớp ${best.sim.toFixed(0)}%`);
}

// ====== Lắng nghe lệnh bật/tắt từ popup ======
chrome.runtime.onMessage.addListener((message) => {
  if (message.action === 'highlightOn') {
    autoHighlightAnswers();
  } else if (message.action === 'highlightOff') {
    clearHighlights();
  }
});

// ====== Chạy khi trang sẵn sàng ======
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', autoHighlightAnswers);
} else {
  autoHighlightAnswers();
}

// ====== Theo dõi thay đổi DOM khi chuyển câu (SPA) ======
let debounceTimer = null;
new MutationObserver(mutations => {
  for (const { addedNodes } of mutations) {
    for (const node of addedNodes) {
      if (
        node.nodeType === 1 &&
        (node.classList?.contains('question') || node.querySelector?.('.question__question'))
      ) {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(autoHighlightAnswers, 400);
        return;
      }
    }
  }
}).observe(document.documentElement, { childList: true, subtree: true });
