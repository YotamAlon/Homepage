var showLoader = function () {
    document.querySelector("#content").innerHTML = "<div style='text-center'><img src='images/ajax-loader.gif'></div>";
};

var insertHtml = function(data) {
    console.log(data);
    document.querySelector("#content").innerHTML = data;
};

var loadHtml = function (name) {
    showLoader();
    $.get(name, function(data) {insertHtml(data);});
};
