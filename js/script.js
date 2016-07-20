var showLoader = function () {
    document.querySelector("#content").innerHTML = "<div class='text-center'><img src='images/ajax-loader.gif'></div>"
}

var insertHtml(html) {
    document.querySelector("#content").innerHTML = html
}
var loadHtml = function (name) {
    showLoader();
    $.get(name, insertHtml(data));
    console.log($.get(name, insertHtml(name)))
}
