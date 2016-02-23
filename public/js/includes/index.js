// Index JavaScript file for project

// img to svg converter
jQuery('img.img-svg').each(function(){
    var $img = jQuery(this);
    var imgID = $img.attr('id');
    var imgClass = $img.attr('class');
    var imgURL = $img.attr('src');
    jQuery.get(imgURL, function(data) {
        var $svg = jQuery(data).find('svg');
        if(typeof imgID !== 'undefined') {
            $svg = $svg.attr('id', imgID);
        }
        if(typeof imgClass !== 'undefined') {
            $svg = $svg.attr('class', imgClass+' svg');
        }
        $svg = $svg.removeAttr('xmlns:a');
        $img.replaceWith($svg);
    }, 'xml');

});

$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items:4,
        nav:true,
        navText:[],
        autoPlay:true,
        loop:true,
        autoPlayHoverPause:true,

        responsive:{
            0:{
                items:1
            },
            768:{
                items:3
            },
            992:{
                items:4
            }
        }
    })
});
