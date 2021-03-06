chrome.extension.sendMessage({}, function (response) {
  var readyStateCheckInterval = setInterval(function () {
    if (document.readyState === "complete") {
      clearInterval(readyStateCheckInterval);

      // ----------------------------------------------------------
      // This part of the script triggers when page is done loading
      console.log("Hello. This message was sent from scripts/inject.js");
      // ----------------------------------------------------------
      document.querySelector('link[rel*="icon"]').href =
        "//placehold.it/32/F00";
    }
  }, 10);
});

document.querySelector('link[rel*="icon"]').href = "//placehold.it/32/F00";
document.title = "Messenger";
