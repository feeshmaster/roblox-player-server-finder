let content_location = '';
document.addEventListener('DOMContentLoaded', function() {

chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    let tab = tabs[0]
    console.log(JSON.stringify(tab))
    content_location = tab.url
    let url = new URL(content_location);

    if (url.hostname === "www.roblox.com") {
        document.getElementById("default").style.display = 'none'
        document.getElementById("app").style.display = 'block'
        if (url.pathname.includes("/games")) {
            document.getElementById("game-id").value = url.pathname.split('/')[2]
            return
        }
    }
  });
});