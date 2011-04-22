var ikr500px = {
    thumbnailImgNodes: function () {
        return jQuery("div.thumb > a.image > img");
    },
    
    fullSizeImageUrl: function (thumbnailUrl) {
        return thumbnailUrl.substr(0, thumbnailUrl.lastIndexOf("/")) + "/5";
    },
    
    populateLightboxContainer: function (appendTo) {
        jQuery("#ikr500px-lightbox-root").remove();
        jQuery(appendTo).append('<div id="ikr500px-lightbox-root" style="display: none"/>');
        
        var that = this;
        
        this.thumbnailImgNodes().each(function () {
            var url = that.fullSizeImageUrl(jQuery(this).attr("src"));
            
            jQuery("#ikr500px-lightbox-root").append(
                '<a href="' + url + '" rel="lightbox[ikr500px-slideshow]" class="ikr500px-lightbox-a">' + url + '</a>'
            );
        });
    },
    
    slideshow: function () {
        this.populateLightboxContainer();
        jQuery(".ikr500px-lightbox-a").first().trigger("click");
    }
};
