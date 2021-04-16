chrome.commands.onCommand.addListener(function () {
    chrome.tabs.query({}, function (tabs) {
        tabs.forEach(tab => chrome.tabs.sendMessage(tab.id, {}));
    });
});