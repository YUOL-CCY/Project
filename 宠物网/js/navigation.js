//导航栏
bgColor()
function bgColor() {
    var navBox = document.getElementsByClassName("nav-box")[0];
    var navLists = navBox.getElementsByTagName("li");
    var oUl = navBox.getElementsByClassName("list")[0];
    var lens = navLists.length - 1;
    var arr = [];
    for (let i = 1; i < lens; i++) {
        arr.push(navLists[i])
    }
    arr.splice(2, 3);
    for (let i = 0; i < arr.length; i++) {
        onmouse(arr[i]);
    }
    function onmouse(obj) {
        obj.onmouseover = function () {
            obj.style.backgroundColor = "rgb(217, 219, 136)";
        }
        obj.onmouseout = function () {
            obj.style.backgroundColor = "";
        }
    }
}
show();
function show() {
    var navBox = document.getElementsByClassName("nav-box")[0];

    var navList = navBox.getElementsByTagName("li")[2];
    // var list=navList.getElementsByTagName("li");
    var oUl = navList.getElementsByClassName("list")[0];
    var oLi = oUl.getElementsByTagName("li");
    var lens = oLi.length;
    var speed = 8;
    var oHeight = parseInt(getComputedStyle(oUl).height);
    var stop = false;
    var sTimer, hideTimer, objTimer;

    //鼠标移入
    navList.onmouseover = function () {
        clearTimeout(objTimer);
        clearInterval(hideTimer);
        clearInterval(sTimer);
        for (var i = 0; i < lens; i++) {
            oLi[i].style.display = "block";
        }
        sTimer = setInterval(function () {
            if (oHeight < 100) {
                oHeight += speed;
                oUl.style.height = oHeight + "px";
            } else {
                oUl.style.height = "100px";
            }
        }, 20)
    }
    //鼠标移出
    navList.onmouseout = function () {
        clearInterval(sTimer);
        clearInterval(hideTimer);
        objTimer = setInterval(function () {
            for (var i = 0; i < lens; i++) {
                oLi[i].style.display = "";
            }
        }, 1000);

        hideTimer = setInterval(function () {
            if (oHeight >= 0) {
                oHeight -= speed;
                oUl.style.height = oHeight + "px";
            } else {
                oUl.style.height = "0px";
            }
        }, 20)
    }
}
//登录注册窗口
var boxWindow=document.getElementsByClassName("box-window");
// console.log(boxWindow)
var loginBox = document.getElementsByClassName("login-box");
var oLogin = document.getElementsByClassName("login");
var box = document.getElementsByClassName("header-nav-box")[0];
// console.log(cancle)
var oUl = box.getElementsByTagName("ul")[1];
var enter = oUl.firstElementChild;
var login = oUl.lastElementChild;
var fix = document.getElementsByClassName("fix")[0];
var arr = [];
for (var i = 0; i < oLogin.length; i++) {
    var cancle = oLogin[i].lastElementChild;
    arr.push(cancle);
}
// console.log(arr)
for (let i = 0; i < arr.length; i++) {
    arr[i].onclick = function () {
        loginBox[i].style.display = "none";
    }
}
//点击对象
function click(obj) {
    if (obj == enter) {
        var i = 0;
        function hideShow() {
            boxWindow[i].style.zIndex = "999";
            boxWindow[i + 1].style.zIndex = "0";
        }
    } else {
        var i = 1;
        function hide() {
            boxWindow[i].style.zIndex = "999";
            boxWindow[i - 1].style.zIndex = "0";
        }
    }
    obj.onclick = function () {
        fix.style.display = "block";
        loginBox[i].style.display = "block";
        if (i == 0) {
            loginBox[i + 1].style.display = "none";
            hideShow();
        } else {
            loginBox[i - 1].style.display = "none";
            hide();
        }
    }
}
//调用函数
click(login);
click(enter);
