var ikr500px = function (jQuery) {
    return {
        thumbnailImgNodes: function () {
            return jQuery("div.thumb > a.image > img");
        },
        
        slideshow: function () {
            console.log("Slideshow requested");
        }
    };
};
