$(document).ready(function () {
    $(".btn-ph").bind("mouseover", function () { 
        $(this).css("background-color", "rgb(219,132,0)");
        $(this).css("border-color", "rgb(219,132,0)");
    });

    $(".btn-ph").bind("mouseout",function () {
        $(this).css("background-color", "rgb(254,154,0)");
        $(this).css("border-color", "rgb(254,154,0)");
    });

    $("#to-blog").bind("click",function () {
        window.open("https://blog.tigerxly.com");
    });

    $("#to-download").bind("click",function () {
        window.open("https://download.tigerxly.com");
    });

    $("#to-git").bind("click",function () {
        window.open("https://git.tigerxly.com");
    });

    $("#to-php").bind("click",function () {
        window.open("https://php.tigerxly.com");
    });

    $("#to-tools").bind("click",function () {
        window.open("https://tools.tigerxly.com");
    });

    $("#to-facebook").bind("click",function () {
        window.open("https://www.facebook.com/liyu.xi.549");
    });

    $("#to-qq").bind("click",function () {
        window.location.href = "tencent://AddContact/?fromId=50&fromSubId=1&subcmd=all&uin=952070942";
    });

    $("#to-twitter").bind("click",function () {
        window.open("https://twitter.com/201230tiger");
    });

    $("#to-youtube").bind("click",function () {
        window.open("https://www.youtube.com/channel/UCFs5bbM_DwBDESqvWgkCHDw?view_as=subscriber");
    });

    $("#to-github").bind("click",function () {
        window.open("https://github.com/sexyxlyWAol");
    });

    $("#to-steam").bind("click",function () {
        window.open("https://steamcommunity.com/id/van_fantasy/");
    });

    $("#to-rss").bind("click",function () {
        window.open("https://blog.tigerxly.com/?feed=rss2&author=2");
    });

});