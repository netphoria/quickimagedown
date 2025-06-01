chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "downloadImage",
    title: "Download Image",
    contexts: ["image"]
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "downloadImage") {
    chrome.downloads.download({
      url: info.srcUrl
    });
  }
});
