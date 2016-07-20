var showLoader = function () {
    document.querySelector("#content").innerHTML = "<div class='text-center'><img src='images/ajax-loader.gif'></div>";
};

var insertHtml = function(data) {
    console.log(data);
    document.querySelector("#content").innerHTML = data.responseText;
};

var loadHtml = function (name) {
    showLoader();
    $.get(name, insertHtml(data));
    console.log($.get(name, insertHtml(data)));
};
