module("Page photos extraction");

test("thumbnailLinkNodes size is correct", function () {
    strictEqual(ikr500px.thumbnailLinkNodes().size(), 20);
});