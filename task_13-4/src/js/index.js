import Shady from './components/shady';

const slimShady = new Shady('Slim');
console.log(slimShady.fullName);

$(document).ready(function () {
    $('.slider').slick();
});

/* Slider (Слайдер) */
$("[data-slider]").slick({
    infinite: true,
    fade: false,
    slidesToShow: 1,
    slidesToScroll: 1
});