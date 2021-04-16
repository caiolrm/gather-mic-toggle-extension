chrome.runtime.onMessage.addListener(function () {
    const elements = document.querySelectorAll('.GameVideo-self-video-menu-bottom > .css-t63xa3');
    if(elements && elements.length) {
        elements[0].click();
    }
});