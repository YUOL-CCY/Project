window.onload = function () {
    movePic();
    function movePic() {
        var oBox = document.getElementById("footer-box");
        var carousel = oBox.getElementsByClassName("footer-carousel")[0];
        var oUl = carousel.getElementsByTagName("ul")[0];
        var oLi = carousel.getElementsByTagName("li");
        var lens = oLi.length;
        var pre_btn = oBox.getElementsByClassName("pre-btn")[0];
        var next_btn = oBox.getElementsByClassName("next-btn")[0];
        var arr = [];
        for (var i = 0; i < lens; i++) {
            oLi[i].style.left = (-136 + i * 136) + "px";
            if (i > 0 && i < lens - 1) { oLi[i].style.opacity = "1" } else { oLi[i].style.opacity = "0" } var opacityPic = oLi[i].style.opacity;
            var oLeft = parseInt(getComputedStyle(oLi[i]).left);
            arr.push([oLeft, opacityPic])
        } Move();
        function Move() {
            arr.unshift(arr[lens - 1]); arr.pop();
            for (var i = 0; i < lens; i++) {
                oLi[i].style.opacity = arr[i][1];
                move(oLi[i], { left: arr[i][0] })
            } timer = setTimeout(Move, 3000)
        }
        pre_btn.onclick = function () {
            arr.unshift(arr[arr.length - 1]);
            arr.pop();
            for (var i = 0; i < lens; i++) {
                oLi[i].style.opacity = arr[i][1];
                move(oLi[i], { left: arr[i][0] })
            }
        };
        next_btn.onclick = function () {
            arr.push(arr[0]);
            arr.shift();
            for (var i = 0; i < lens; i++) {
                oLi[i].style.opacity = arr[i][1];
                move(oLi[i], { left: arr[i][0] })
            }
        };
        onMous(pre_btn);
        onMous(next_btn); onMous(oUl);
        function onMous(obj) {
            obj.onmouseover = function () { clearTimeout(timer) };
            obj.onmouseout = function () { timer = setTimeout(Move, 5000) }
        }
    } function move(obj, json) {
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