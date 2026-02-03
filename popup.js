// Lấy các phần tử DOM
const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');
const inputText = document.getElementById('inputText');
const compareBtn = document.getElementById('compareBtn');
const results = document.getElementById('results');
const resultsList = document.getElementById('resultsList');
const sampleQuestion = document.getElementById('sampleQuestion');
const sampleAnswer = document.getElementById('sampleAnswer');
const addSampleBtn = document.getElementById('addSampleBtn');
const samplesList = document.getElementById('samplesList');
const sampleCount = document.getElementById('sampleCount');

// Chuyển đổi tabs
tabBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const tabName = btn.dataset.tab;
    
    // Xóa active khỏi tất cả
    tabBtns.forEach(b => b.classList.remove('active'));
    tabContents.forEach(c => c.classList.remove('active'));
    
    // Thêm active vào tab được chọn
    btn.classList.add('active');
    document.getElementById(tabName).classList.add('active');
    
    // Nếu chuyển sang tab quản lý, load lại danh sách
    if (tabName === 'manage') {
      loadSamples();
    }
  });
});

// Hàm tính độ tương đồng giữa 2 văn bản (Cosine Similarity)
function calculateSimilarity(text1, text2) {
  // Chuẩn hóa văn bản
  const normalize = (text) => {
    return text.toLowerCase()
      .replace(/[^\w\sàáảãạăằắẳẵặâầấẩẫậèéẻẽẹêềếểễệìíỉĩịòóỏõọôồốổỗộơờớởỡợùúủũụưừứửữựỳýỷỹỵđ]/gi, '')
      .trim();
  };
  
  const norm1 = normalize(text1);
  const norm2 = normalize(text2);
  
  // Tạo danh sách từ
  const words1 = norm1.split(/\s+/);
  const words2 = norm2.split(/\s+/);
  
  // Tạo tập hợp từ duy nhất
  const allWords = new Set([...words1, ...words2]);
  
  // Tạo vector tần suất
  const vector1 = {};
  const vector2 = {};
  
  allWords.forEach(word => {
    vector1[word] = 0;
    vector2[word] = 0;
  });
  
  words1.forEach(word => vector1[word]++);
  words2.forEach(word => vector2[word]++);
  
  // Tính tích vô hướng và độ dài vector
  let dotProduct = 0;
  let magnitude1 = 0;
  let magnitude2 = 0;
  
  allWords.forEach(word => {
    dotProduct += vector1[word] * vector2[word];
    magnitude1 += vector1[word] ** 2;
    magnitude2 += vector2[word] ** 2;
  });
  
  magnitude1 = Math.sqrt(magnitude1);
  magnitude2 = Math.sqrt(magnitude2);
  
  // Tránh chia cho 0
  if (magnitude1 === 0 || magnitude2 === 0) {
    return 0;
  }
  
  // Cosine similarity
  return (dotProduct / (magnitude1 * magnitude2)) * 100;
}

// Hàm so sánh câu hỏi và tìm đáp án
async function compareText() {
  const input = inputText.value.trim();
  
  if (!input) {
    alert('Vui lòng nhập câu hỏi cần tìm đáp án!');
    return;
  }
  
  // Lấy danh sách câu hỏi từ storage
  const data = await chrome.storage.local.get(['samples']);
  const samples = data.samples || [];
  
  if (samples.length === 0) {
    alert('Chưa có câu hỏi nào được lưu! Vui lòng thêm trong tab "Quản Lý Mẫu".');
    return;
  }
  
  // Tính độ tương đồng với từng câu hỏi
  const comparisons = samples.map(sample => {
    const similarity = calculateSimilarity(input, sample.question);
    return {
      ...sample,
      similarity: similarity
    };
  });
  
  // Sắp xếp theo độ tương đồng giảm dần
  comparisons.sort((a, b) => b.similarity - a.similarity);
  
  // Hiển thị kết quả
  displayResults(comparisons);
}

// Hiển thị kết quả
function displayResults(comparisons) {
  resultsList.innerHTML = '';
  
  comparisons.forEach((item, index) => {
    const resultItem = document.createElement('div');
    resultItem.className = 'result-item';
    
    const similarity = item.similarity.toFixed(1);
    // Hiển thị câu hỏi và đáp án
    const questionPreview = item.question.length > 80 ? item.question.substring(0, 80) + '...' : item.question;
    const answerPreview = item.answer.length > 200 ? item.answer.substring(0, 200) + '...' : item.answer;
    
    resultItem.innerHTML = `
      <div class="similarity-bar">
        <div class="similarity-fill" style="width: ${similarity}%"></div>
      </div>
      <div class="similarity-text">Độ khớp: ${similarity}%</div>
      <div class="question-preview"><strong>Câu hỏi:</strong> ${questionPreview}</div>
      <div class="answer-box">
        <strong>✓ Đáp án:</strong>
        <div class="answer-content">${answerPreview}</div>
      </div>
    `;
    
    resultsList.appendChild(resultItem);
  });
  
  results.classList.remove('hidden');
}

// Thêm câu hỏi và đáp án mới
async function addSample() {
  const question = sampleQuestion.value.trim();
  const answer = sampleAnswer.value.trim();
  
  if (!question || !answer) {
    alert('Vui lòng nhập đầy đủ câu hỏi và đáp án!');
    return;
  }
  
  // Lấy danh sách câu hỏi hiện tại
  const data = await chrome.storage.local.get(['samples']);
  const samples = data.samples || [];
  
  // Thêm câu hỏi mới
  samples.push({
    id: Date.now(),
    question: question,
    answer: answer,
    createdAt: new Date().toISOString()
  });
  
  // Lưu vào storage
  await chrome.storage.local.set({ samples: samples });
  
  // Reset form
  sampleQuestion.value = '';
  sampleAnswer.value = '';
  
  // Load lại danh sách
  loadSamples();
  
  alert('Đã thêm câu hỏi thành công!');
}

// Load danh sách câu hỏi
async function loadSamples() {
  const data = await chrome.storage.local.get(['samples']);
  const samples = data.samples || [];
  
  sampleCount.textContent = samples.length;
  samplesList.innerHTML = '';
  
  if (samples.length === 0) {
    samplesList.innerHTML = `
      <div class="empty-state">
        <p>📝 Chưa có câu hỏi nào</p>
        <p style="font-size: 12px;">Hãy thêm câu hỏi và đáp án để bắt đầu</p>
      </div>
    `;
    return;
  }
  
  samples.forEach(sample => {
    const sampleItem = document.createElement('div');
    sampleItem.className = 'sample-item';
    
    const questionPreview = sample.question.length > 60 ? sample.question.substring(0, 60) + '...' : sample.question;
    const answerPreview = sample.answer.length > 80 ? sample.answer.substring(0, 80) + '...' : sample.answer;
    
    sampleItem.innerHTML = `
      <div class="sample-header">
        <span class="sample-name">❓ ${questionPreview}</span>
        <button class="btn-delete" data-id="${sample.id}">Xóa</button>
      </div>
      <div class="sample-preview"><strong>Đáp án:</strong> ${answerPreview}</div>
    `;
    
    samplesList.appendChild(sampleItem);
  });
  
  // Thêm sự kiện xóa
  document.querySelectorAll('.btn-delete').forEach(btn => {
    btn.addEventListener('click', async (e) => {
      const id = parseInt(e.target.dataset.id);
      await deleteSample(id);
    });
  });
}

// Xóa câu hỏi
async function deleteSample(id) {
  if (!confirm('Bạn có chắc muốn xóa câu hỏi này?')) {
    return;
  }
  
  const data = await chrome.storage.local.get(['samples']);
  let samples = data.samples || [];
  
  samples = samples.filter(sample => sample.id !== id);
  
  await chrome.storage.local.set({ samples: samples });
  
  loadSamples();
}

// Khởi tạo câu hỏi mẫu mặc định
async function initializeDefaultSamples() {
  const data = await chrome.storage.local.get(['samples', 'initialized']);
  
  // Chỉ khởi tạo nếu chưa có dữ liệu và chưa được khởi tạo trước đó
  if (!data.initialized && (!data.samples || data.samples.length === 0)) {
    // Load dữ liệu từ file default-samples.js
    const defaultSamples = DEFAULT_SAMPLES.map((sample, index) => ({
      id: Date.now() + index,
      question: sample.question,
      answer: sample.answer,
      category: sample.category || "General",
      createdAt: new Date().toISOString()
    }));
    
    // Lưu câu hỏi mẫu mặc định
    await chrome.storage.local.set({ 
      samples: defaultSamples,
      initialized: true 
    });
    
    console.log(`✅ Đã khởi tạo ${defaultSamples.length} câu hỏi mẫu mặc định`);
  }
}

// Sự kiện
compareBtn.addEventListener('click', compareText);
addSampleBtn.addEventListener('click', addSample);

// Kiểm tra nếu có câu hỏi từ context menu
async function checkPendingQuestion() {
  const data = await chrome.storage.local.get(['pendingQuestion', 'autoSearch']);
  
  if (data.pendingQuestion && data.autoSearch) {
    // Điền câu hỏi vào input
    inputText.value = data.pendingQuestion;
    
    // Xóa pending question khỏi storage
    await chrome.storage.local.remove(['pendingQuestion', 'autoSearch']);
    
    // Tự động tìm đáp án
    setTimeout(() => {
      compareText();
    }, 300);
    
    console.log('✅ Đã tự động tìm đáp án cho:', data.pendingQuestion);
  }
}

// Khởi tạo và load danh sách khi mở extension
(async function init() {
  await initializeDefaultSamples();
  loadSamples();
  await checkPendingQuestion();
})();