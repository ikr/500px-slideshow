var ikr500px = {
    thumbnailImgNodes: function () {
        return jQuery("div.thumb > a.image > img");
    },
    
    fullSizeImageUrl: function (thumbnailUrl) {
        return thumbnailUrl.substr(0, thumbnailUrl.lastIndexOf("/")) + "/5";
    },
    
    populateLightboxContainer: function () {
        jQuery('body').append('<div id="ikr500px-lightbox-root"/>');
    },
    
    slideshow: function () {
        console.log("Slideshow requested");
    }
};
