document.getElementById("openBlog").addEventListener("click", function() {
    chrome.tabs.create({ url: "warbounders.blogspot.com" });
});
