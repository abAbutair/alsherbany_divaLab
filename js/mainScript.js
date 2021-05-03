// Diva-Lab @2019 Main Script
////////////////////////////////////////

let headerHeight = $('.header').outerHeight();
let windowHeight = $(window).outerHeight();
let sliderHeight = windowHeight - headerHeight;

$('.slider--main .carousel-item').css('height', sliderHeight + 'px');
$('.slider--main .carousel-caption').css({'height':sliderHeight/1.5 + 'px', 'width':sliderHeight/1.5 + 'px'});


if ($('#myStyle').attr('href') === 'css/style_rtl.css') {
    $('.slider--main .carousel-indicators').css({'bottom': 'calc( 50% - ' + sliderHeight/5 + 'px )', 'left':'calc( 15% + ' + sliderHeight/3 + 'px )', 'right':'auto'});
}else {
    $('.slider--main .carousel-indicators').css({'bottom': 'calc( 50% - ' + sliderHeight/5 + 'px )', 'right':'calc( 15% + ' + sliderHeight/3 + 'px )', 'left':'auto'});
}