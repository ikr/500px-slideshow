var ikr500px = {
    thumbnailImgNodes: function () {
        return jQuery("div.thumb > a.image > img");
    },
    
    fullSizeImageUrl: function (thumbnailUrl) {
        return thumbnailUrl.substr(0, thumbnailUrl.lastIndexOf("/")) + "/5";
    },
    
    populateLightboxContainer: function (appendTo) {
        jQuery(appendTo).append('<div id="ikr500px-lightbox-root" style="display: none"/>');
    },
    
    slideshow: function () {
        console.log("Slideshow requested");
    }
};
