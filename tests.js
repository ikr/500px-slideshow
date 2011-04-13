module("Page photos extraction");

test("thumbnailImgNodes size is correct", function () {
    strictEqual(ikr500px($).thumbnailImgNodes().size(), 20);
});

test("thumbnailImgNodes first image source is correct", function () {
    strictEqual(
        ikr500px($).thumbnailImgNodes().first().attr("src"),
        "http://photos.500px.com/484082/3"
    );
});