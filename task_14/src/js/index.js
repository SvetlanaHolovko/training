import Shady from './components/shady';

const slimShady = new Shady('Slim');
console.log(slimShady.fullName);

$(function () {
    
    function initStars() {
        const stars = $('.stars li');

        stars.on('click', function () {
            $(stars).removeClass('active');
            $(this).toggleClass('active');

        })
    }

    /* Slider (Слайдер) */
    $("[data-slider]").slick({
        arrows: false, 
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 1000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow:2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow:1
                }
            }
        ]
    });

    initStars();
    
});

