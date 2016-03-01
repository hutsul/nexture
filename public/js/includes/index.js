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



function sliceSize(dataNum, dataTotal) {
    return (dataNum / dataTotal) * 360;
}
function addSlice(sliceSize, pieElement, offset, sliceID, color) {
    $(pieElement).append("<div class='slice "+sliceID+"'><span></span></div>");
    var offset = offset - 1;
    var sizeRotation = -179 + sliceSize;
    $("."+sliceID).css({
        "transform": "rotate("+offset+"deg) translate3d(0,0,0)"
    });
    $("."+sliceID+" span").css({
        "transform"       : "rotate("+sizeRotation+"deg) translate3d(0,0,0)",
        "background-color": color
    });
}
function iterateSlices(sliceSize, pieElement, offset, dataCount, sliceCount, color) {
    var sliceID = "s"+dataCount+"-"+sliceCount+ '-'+ Date.now();
    var maxSize = 179;
    if(sliceSize<=maxSize) {
        addSlice(sliceSize, pieElement, offset, sliceID, color);
    } else {
        addSlice(maxSize, pieElement, offset, sliceID, color);
        iterateSlices(sliceSize-maxSize, pieElement, offset+maxSize, dataCount, sliceCount+1, color);
    }
}
function createPie(dataElement, pieElement) {
    var listData = [];
    $(dataElement+" span").each(function() {
        listData.push(Number($(this).html()));
    });
    var listTotal = 0;
    for(var i=0; i<listData.length; i++) {
        listTotal += listData[i];
    }
    var offset = 0;
    var color = [
        "#39A3EB",
        "#DC3812",
        "#F8BB08",
        "#7AB827",
        "#990099",
        "navy",
        "turquoise",
        "forestgreen",
        "purple",
        "gray"
    ];
    for(var i=0; i<listData.length; i++) {
        var size = sliceSize(listData[i], listTotal);
        iterateSlices(size, pieElement, offset, i, 0, color[i]);

        $(dataElement+" li:nth-child("+(i+1)+") i").css("border-color", color[i]);
        offset += size;
    }
}

createPie(".tab_1 .pieID.legend", ".tab_1 .pieID.pie");
createPie(".tab_2 .pieID.legend", ".tab_2 .pieID.pie");
createPie(".tab_3 .pieID.legend", ".tab_3 .pieID.pie");
createPie(".tab_4 .pieID.legend", ".tab_4 .pieID.pie");