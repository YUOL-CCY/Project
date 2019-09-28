window.onload = function () {
    var arr = [];
    var oBox = document.getElementById("carousel-window");
    var oPicBox = document.getElementsByClassName("carousel-pic")[0];
    var carouselPic = oBox.getElementsByClassName("carousel-pic")[0];
    var aLi = oPicBox.getElementsByTagName("li");
    var pre_btn = oBox.getElementsByClassName("pre_btn")[0];
    var next_btn = oBox.getElementsByClassName("next_btn")[0];
    var len = aLi.length;
    for (var i = 0; i < len; i++) {
        var oLeft = parseInt(getComputedStyle(aLi[i]).left);
        var opacityP = getComputedStyle(aLi[i]).opacity;
        arr.push([oLeft, opacityP])
    }
    selfMove();
    function selfMove() {
        arr.unshift(arr[arr.length - 1]);
        arr.pop();
        for (var i = 0; i < len; i++) {
            aLi[i].style.opacity = arr[i][1];
            movePic(aLi[i], { left: arr[i][0] })
        } timer = setTimeout(selfMove, 5000)
    } pre_btn.onclick = function () {
        arr.unshift(arr[arr.length - 1]);
        arr.pop();
        for (var i = 0; i < len; i++) {
            aLi[i].style.opacity = arr[i][1];
            movePic(aLi[i], { left: arr[i][0] })
        }
    };
    next_btn.onclick = function () {
        arr.push(arr[0]);
        arr.shift();
        for (var i = 0; i < len; i++) {
            aLi[i].style.opacity = arr[i][1];
            movePic(aLi[i], { left: arr[i][0] })
        }
    };
    carouselPic.onmouseover = function () { clearTimeout(timer) };
    carouselPic.onmouseout = function () { timer = setTimeout(selfMove, 5000) };
    time();
    function time() {
        var date = new Date();
        var timeMth = document.getElementById("time-month");
        var timerDay = document.getElementById("time-day");
        var spanW = timerDay.getElementsByTagName("span")[0];
        var spanM = timeMth.getElementsByTagName("span")[0];
        var weekDay = ["日", "一", "二", "三", "四", "五", "六"];
        setInterval(function () {
            var month = date.getMonth(); 
            var day = date.getDate();
            var week = date.getDay();
            // console.log(month,day)
            if (month < 10) { month = "0" +(month+1)} if (day < 10) { day = "0" + day } spanM.innerHTML = month+ "." + day;
            spanW.innerHTML = weekDay[week]
        }, 1000)
    }
    function carouselCont() { }
    carouselCont.prototype = {
        init: function () {
            this.carousel = document.getElementById("carousel");
            this.img = this.carousel.getElementsByTagName("img");
            this.lens = this.img.length;
            this.speedLeft = 8;
            this.speedTop = 4;
            this.arr = [];
            this.i = 0;
            this.j = 0;
            for (this.i; this.i < this.lens; this.i++) {
                this.opacity = this.img[i].style.opacity;
                this.oLeft = parseInt(getComputedStyle(this.img[i]).left);
                this.oTop = parseInt(getComputedStyle(this.img[i]).top);
                this.arr.push([this.oLeft, this.oTop, this.opacity])
            } this.arrLens = this.arr.length
        },
        moveLeft: function () {
            this.init();
            for (this.j; this.j < this.arrLens; this.j++) {
                this.oLeft += (this.arr[this.j][0] + this.speedLeft * this.j);
                this.img[this.j].style.left = this.oLeft + "px"
            } this.moveTop()
        },
        moveTop: function () {
            this.init(); for (this.j; this.j < this.arrLens; this.j++) {
                this.oTop += (this.arr[this.j][1] + this.speedTop * this.j);
                this.img[this.j].style.top = this.oTop + "px"
            }
        },
    };
    var carouselCont = new carouselCont();
    carouselCont.moveLeft();
    init();
    function init() {
        var carouselImg = document.getElementById("carousel");
        var img = carouselImg.getElementsByTagName("img");
        var len = img.length;
        var arr = [];
        for (var i = 0; i < len; i++) {
            opacity = img[i].style.opacity;
            oLeft = parseInt(getComputedStyle(img[i]).left);
            oTop = parseInt(getComputedStyle(img[i]).top);
            arr.push([oLeft, oTop, opacity])
        } move();
        function move() {
            arr.unshift(arr[len - 1]);
            arr.pop();
            for (var i = 0; i < len; i++) {
                img[i].style.opacity = arr[i][2];
                movePic(img[i], { left: arr[i][0], top: arr[i][1] })
            }
            setTimeout(move, 3000)
        }
    }
    function movePic(obj, json) {
        clearInterval(obj.timer);
        obj.timer = setInterval(function () {
            for (var prop in json) {
                var attr = parseInt(getComputedStyle(obj)[prop]);
                var speed = (json[prop] - attr) / 8;
                obj.style[prop] = attr + speed + "px"
            }
        }, 20)
    }
}