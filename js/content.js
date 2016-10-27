console.log("SS-formCompletion injected!");
//Listen to popup switch
chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        if (request.status == "which") {
            sendResponse({status: "on"});
        }
    }
);
