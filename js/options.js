function loadPage() {
    // console.log("loadPage");
    chrome.storage.sync.get(null, function (items) {
        var table = document.getElementById("rules-table");
        var count = 1;
        for (var item in items) {
            var value;
            if (items.hasOwnProperty(item)) {
                value = items[item];
            }
            else {
                value = null;
            }
            var newNode = document.createElement("tr");
            var trNode = table.appendChild(newNode);
            var td1 = document.createElement("td");
            var tdNode = trNode.appendChild(td1);
            var td1Text = document.createTextNode(item);
            tdNode.appendChild(td1Text);
        }
        // document.getElementById("rules-table").innerHTML=table;
    });
    var temp=document.getElementById("rules-table");
    console.log(temp);
    console.log(document.getElementsByTagName("tr").length);

    document.getElementById("submit").onclick = function () {
        var insertKey = document.getElementById("key").value;
        var insertValue = document.getElementById("value").value;
        var rule = {};
        rule[insertKey] = insertValue;
        chrome.storage.sync.set(rule, function () {
            console.log(rule);
        });
    };

    // var modifyButtons = document.getElementsByClassName("modify");
    //console.log(document.getElementsByTagName("input"));

}
window.onload = loadPage();
