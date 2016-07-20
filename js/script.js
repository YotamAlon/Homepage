var showLoader = function () {
    document.querySelector("#content").innerHTML = "<div class='text-center'><img src='images/ajax-loader.gif'></div>";
};

var insertHtml = function(data) {
    document.querySelector("#content").innerHTML = data.responseText;
};

var loadHtml = function (name) {
    showLoader();
    $.get(name, insertHtml());
    console.log($.get(name, insertHtml()));
};
