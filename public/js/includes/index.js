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
        dots:true,
        dotsEach:true,
        autoPlay:true,
        loop:true,
        autoPlayHoverPause:true,

        responsive:{
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:4
            }
        }
    })
    $('.user_box').click(function(){
        $(this).toggleClass('open');
    });
});

$("#accordion li > span").click(function(){
    if ($(window).width() <= 767) {
        $('span').removeClass('active');
        $(this).addClass('active');
        if (!$(this).next().is(':visible')) {
            $('#accordion ul').slideUp(300);
        }
        $(this).next().slideToggle(300);
    }
});
$(window).resize(function() {
    var screenwidth = $(document).width();
    if (screenwidth <= 767) {
        $('#accordion li > span').next().hide();
    }
});

$('#accordion .sub_menu:eq(0)').show();
$('#accordion  li > span:eq(0)').addClass('active');

$("#accordion li > span").hover(function(){
    if ($(window).width() >= 768) {
        $('#accordion li > span').next().show();
    }
});
