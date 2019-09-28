window.onload = function () {
    var hl = document.getElementsByTagName("html")[0];
    var winWidth = window.innerWidth;
    window.onresize = function () {
        var w = parseInt(window.innerWidth);
        if (w == winWidth) {
            hl.style.overflowX = "hidden";
        } else {
            hl.style.overflowX = "auto";
        }
    }
}
