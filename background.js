// Background script (Service Worker) cho Q&A Finder Extension

// Tạo context menu khi extension được cài đặt hoặc khởi động
chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "findAnswer",
    title: "🔍 Tìm đáp án cho: \"%s\"",
    contexts: ["selection"]
  });
  
  console.log('✅ Context menu đã được tạo');
});

// Xử lý khi click vào context menu
chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "findAnswer") {
    const selectedText = info.selectionText;
    
    if (selectedText && selectedText.trim()) {
      // Lưu text vào storage để popup có thể đọc
      chrome.storage.local.set({ 
        pendingQuestion: selectedText.trim(),
        autoSearch: true 
      }, () => {
        // Mở popup (hoặc focus nếu đã mở)
        chrome.action.openPopup();
        
        console.log('📝 Đã lưu câu hỏi:', selectedText.trim());
      });
    }
  }
});

// Optional: Xử lý khi extension được cập nhật
chrome.runtime.onStartup.addListener(() => {
  console.log('🚀 Q&A Finder Extension started');
});
