export const blockWebsite = (url) => {
  chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (tab.url.includes(url) && changeInfo.status === "loading") {
      chrome.tabs.remove(tabId);
    }
  });
};
