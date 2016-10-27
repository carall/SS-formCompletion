window.onload = function () {
    //check switch status and response
    chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
       chrome.tabs.sendMessage(tabs[0].id, {status: "which"}, function (response) {
           var switchButton = document.getElementById("switch");
           var icon = "<span class='glyphicon glyphicon-off'></span>";
           if (response) {
               switchButton.value = "on";
               switchButton.innerHTML = icon + " RUNNING";
               switchButton.className = "btn btn-block btn-success disabled";
           }
       })
    });
    //popup settings button
    var optionsTab = {url: "options.html"};
    document.getElementById("settings").onclick = function () {
        chrome.tabs.create(optionsTab);
    };
    //control the switch
    document.getElementById("switch").onclick = function () {
        var value = this.value;
        var icon = "<span class='glyphicon glyphicon-off'></span>";
        if (value == "off") {
            this.innerHTML = icon + " RUNNING";
            this.className = "btn btn-block btn-success disabled";
            this.value = "on";
            chrome.tabs.executeScript(null, {file: "js/content.js"});
        }
    };
};
