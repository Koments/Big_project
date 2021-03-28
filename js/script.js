$(document).ready(function () {
    $('.sidenav').sidenav();
    $('.modal').modal();
    $('.collapsible').collapsible();
    $(".slick-prev").text("<");
    $(".slick-next").text(">")
});
$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    arrows: false,
    centerMode: true,
    focusOnSelect: true
});
$('.slider-for2').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav2'
});
$('.slider-nav2').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for2',
    dots: false,
    arrows: false,
    centerMode: true,
    focusOnSelect: true
});
$('.slider-for3').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav3'
});
$('.slider-nav3').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for3',
    dots: false,
    arrows: false,
    centerMode: true,
    focusOnSelect: true
});
$('.multiple-items').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,

});
$('.single-item').slick();
let orderBtns = document.querySelectorAll(".modal-trigger");
orderBtns.forEach((btn) => {

    btn.addEventListener('click', (e) => {

        $('#articul').text(`Артикуль ${btn.dataset.art}`)

        console.log(btn.dataset);
    })
});
