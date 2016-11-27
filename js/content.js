
console.log("SS-formCompletion injected!");

window.onload=loadPage();
function loadPage() {
    autoComplete();
  // createTable(10,10);
  // fun();
}

//规定命令的规则为2-5个英文字符！！！！！！！！！！！
var obj = {
    'wys' : '王云松@163.com,tianxiang@163.com',
    'tx' : '田响',
    'zlj' : '张利剑',
    'qpl' : 'lijianzhang@gmail.com;tianxiangnju@163.com;yunsong_wang@163.com;carallin_t@163.com'
}

function autoComplete() {
    // var input = document.getElementsByTagName('input')[3];
    var originValue = undefined;
    document.addEventListener('keyup',function (event) {
      // if (event.target.nodeName.toLowerCase() == ('input' || 'textarea')) {
        var input = event.target;
        console.log(input);
        var values = input.value;
        var start = values.lastIndexOf(':');
        var len = values.length - start -1;
        if (start >= 0 && len > 1 && len < 6) { //定义命令的规则为2-5个英文字符！！！！！！！！！！！
          var start = values.lastIndexOf(':');
          name = values.slice(start+1);
          console.log(name);
          originValue = values.slice(0,start);

          if (obj.hasOwnProperty(name)) {
              if(!originValue){
                  input.value = obj[name];
              }else {
                  input.value = originValue + obj[name];
              }
          }
        }
      // }
    })


    // document.addEventListener('textInput',function (event) {
    //   // if (event.target.nodeName.toLowerCase() == ('input' || 'textarea')) {
    //     var input = event.target;
    //     console.log(input);
    //     var values = input.value;
    //     console.log(input.text);
    //     var start = values.lastIndexOf(':');
    //     var len = values.length - start -1;
    //     if (start >= 0 && len > 1 && len < 6) { //定义命令的规则为2-5个英文字符！！！！！！！！！！！
    //       var start = values.lastIndexOf(':');
    //       name = values.slice(start+1);
    //       console.log(name);
    //       originValue = values.slice(0,start);
    //
    //       if (obj.hasOwnProperty(name)) {
    //           if(!originValue){
    //               input.value = obj[name];
    //           }else {
    //               input.value = originValue + obj[name];
    //           }
    //       }
    //     }
    //   // }
    // })
}

// function autoComplete1() {
//     // var input = document.getElementById('input1');
//     var input = document.getElementsByTagName('input')[3];
//     var originValue = input.value;
//     input.addEventListener('keyup',function (event) {
//         var values = input.value;
//         var start = values.lastIndexOf(':');
//         var len = values.length - start -1;
//         if (start >= 0 && len > 1 && len < 6) { //定义命令的规则为2-5个英文字符！！！！！！！！！！！
//           var start = values.lastIndexOf(':');
//           name = values.slice(start+1);
//           console.log(name);
//           originValue = values.slice(0,start);
//
//           if (obj.hasOwnProperty(name)) {
//               if(!originValue){
//                   input.value = obj[name];
//               }else {
//                   input.value = originValue + obj[name];
//               }
//           }
//         }
//     })
// }


//Listen to popup switch
chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        if (request.status == "which") {
            sendResponse({status: "on"});
        }
    }
);
