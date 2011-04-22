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
        ikr500px.populateLightboxContainer("#qunit-fixture");
        strictEqual($("#qunit-fixture > #ikr500px-lightbox-root").length, 1);
    });
    
    test("populateLightboxContainer's root div is invisible", function () {
        ikr500px.populateLightboxContainer("#qunit-fixture");
        strictEqual($("#ikr500px-lightbox-root").css("display"), "none");
    });
};