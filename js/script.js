var showLoader = function () {
    document.querySelector("#content").innerHTML = "<div class='text-center'><img src='images/ajax-loader.gif'></div>"
}

var loadHtml = function (html) {
    showLoader();
    document.querySelector("#content").innerHTML = html;
}

var getCode = function (name) {
    $.get(name, loadHtml(data))
}
