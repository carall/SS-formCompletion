//popup settings button
// var extensionId = chrome.runtime.id;
// var optionsTab = {
//     url : "chrome-extension://" + extensionId + "/options.html"
// };
var optionsTab = {url : "options.html"};
document.getElementById("settings").onclick = function () {
    chrome.tabs.create(optionsTab);
};
//control the content scripts
var contentScript = {file : "js/content.js"};
document.getElementById("on").onclick = function () {
  chrome.tabs.executeScript(contentScript);
};