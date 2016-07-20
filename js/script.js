var showLoader = function () {
    document.querySelector("#content").innerHTML = "<div class='text-center'><img src='images/ajax-loader.gif'></div>"
}

var loadHtml = function (name) {
    showLoader();
    document.querySelector("#content").innerHTML = $.get(name, loadHtml(data));
}
