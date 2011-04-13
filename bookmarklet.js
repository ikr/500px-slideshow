$("head").append(
    '<link rel="stylesheet" href="http://krechetov.net/~ikr/jquery-lightbox/css/lightbox.css" type="text/css" media="screen" />'
);

$.getScript("http://krechetov.net/~ikr/jquery-lightbox/jquery.lightbox.js", function () {
    $.getScript("http://krechetov.net/~ikr/500px-slideshow/500px-slideshow.js", function () {
        ikr500px($).slideshow();
    });
});