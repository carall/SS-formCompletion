function loadPage() {
    // console.log("loadPage");
    chrome.storage.sync.get(null, function (items) {
        var table = document.getElementsByTagName("table")[0];
        var i = 0;
        var thtr = document.createElement("tr");

        var th1 = document.createElement("th");
        var th2 = document.createElement("th");
        var th3 = document.createElement("th");
        var th4 = document.createElement("th");

        var t1 = document.createTextNode("序号");
        var t2 = document.createTextNode("缩写");
        var t3 = document.createTextNode("内容");
        var t4 = document.createTextNode("操作");

        th1.appendChild(t1);
        th2.appendChild(t2);
        th3.appendChild(t3);
        th4.appendChild(t4);

        thtr.appendChild(th1);
        thtr.appendChild(th2);
        thtr.appendChild(th3);
        thtr.appendChild(th4);
        table.appendChild(thtr);

        for(var item in items) {
            var tr = document.createElement("tr");

            var td1 = document.createElement("td");
            var td2 = document.createElement("td");
            var td3 = document.createElement("td");
            var td4 = document.createElement("td");

            var text1 = document.createTextNode(++i);
            var text2 = document.createTextNode(item);
            var text3 = document.createTextNode(items[item]);

            var btn1 = document.createElement("button");
            var btn2 = document.createElement("button");

            var btn1Text = document.createTextNode("修改");
            var btn2Text = document.createTextNode("删除");

            btn1.appendChild(btn1Text);
            btn2.appendChild(btn2Text);

            td4.appendChild(btn1);
            td4.appendChild(btn2);
            td3.appendChild(text3);
            td2.appendChild(text2);
            td1.appendChild(text1);

            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            tr.appendChild(td4);

            table.appendChild(tr);
            console.log(tr);
        }
    });

}
window.onload = loadPage();
