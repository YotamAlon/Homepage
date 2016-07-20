var showLoader = function () {
    document.querySelector("#content").innerHTML = "<div class='text-center'><img src='images/ajax-loader.gif'></div>";
};

var insertHtml = function(data) {
    console.log(data);
    document.querySelector("#content").innerHTML = data.responseText;
};

var loadHtml = function (name) {
    showLoader();
    console.log($.get(name, function(data) {return data;}));
    $.get(name, function(data) {insertHtml(data);});
};
