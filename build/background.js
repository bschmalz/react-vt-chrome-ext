// load content script
chrome.tabs.executeScript({file: "content-script/script.js"}, function() {
        console.log("content script loaded");
      });

// handles incoming connections
chrome.runtime.onConnect.addListener(function(port) {
  // post message to content script
  port.postMessage('greetings from backgroundjs');
  // listen for messages from content script
  port.onMessage.addListener(function(data) {
    console.log(data);
  });
});

