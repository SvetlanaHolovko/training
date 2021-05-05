import Shady from './components/shady';

const slimShady = new Shady('Slim');
console.log(slimShady.fullName);

$(document).ready(function () {
    $('.slider').slick();
});

// $(function () {
//     $('.multiple-items').slick({
//         infinite: true,
//         slidesToShow: 3,
//         slidesToScroll: 1,
//         arrows: true,
//         centerMode: true,
//     });
// });