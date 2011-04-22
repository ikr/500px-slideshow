ikr500px.runTests = function ($) {
    module("Page photos extraction");

    test("thumbnailImgNodes size is correct", function () {
        strictEqual(ikr500px.thumbnailImgNodes().size(), 20);
    });

    test("thumbnailImgNodes first image source is correct", function () {
        strictEqual(
            ikr500px.thumbnailImgNodes().first().attr("src"),
            "http://photos.500px.com/484082/3"
        );
    });

    test("fullSizeImageUrl works", function () {
        strictEqual(
            ikr500px.fullSizeImageUrl("http://photos.500px.com/484082/3"),
            "http://photos.500px.com/484082/5"
        );
    });

    module("Lightbox container");

    test("populateLightboxContainer creates the root div", function () {
        ikr500px.populateLightboxContainer();
        strictEqual(1, $("body > #ikr500px-lightbox-root").length);
    });
};