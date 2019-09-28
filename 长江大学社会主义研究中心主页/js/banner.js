var time = "";
var index = 1;
var nums = $(".spanBox span").length;
$(function () {
    showimg(index);
    //鼠标移入移出
    $(".spanBox span").hover(function () {
        clearTimeout(time);
        var icon = $(this).data("slide-to");
        $(".spanBox span").removeClass("actvie").eq(icon - 1).addClass("actvie");
        $(".ban-pic ul li").hide().stop(true, true).eq(icon - 1).fadeIn("slow");
    }, function () {
        index = $(this).data("slide-to") + 1 > nums ? 1 : parseInt($(this).data("slide-to")) + 1;
        time = setTimeout(`showimg(${index})`, 3000);
    });
});

function showimg(num) {
    var index = num;
    $(".spanBox span").removeClass("actvie").eq(index - 1).addClass("actvie");
    $(".ban-pic ul li").hide().stop(true, true).eq(index - 1).fadeIn("slow");
    index = index + 1 > nums ? 1 : index + 1;
    time = setTimeout(`showimg(${index})`, 3000);
    // time = setTimeout(console.log(showimg), 3000);
}

