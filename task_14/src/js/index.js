// import Shady from './components/shady';

// const slimShady = new Shady('Slim');
// console.log(slimShady.fullName);

$(function () {

    /* Бургер-меню */

    const burgerMenu = document.querySelector('.header__burger');
    const menuHeader = document.querySelector('.header__menu');
    if (burgerMenu) {
        burgerMenu.addEventListener("click", function (e) {
            document.body.classList.toggle('lock');
            burgerMenu.classList.toggle('active');
            menuHeader.classList.toggle('active');
        });
    }

    /* Прокрутка при клике*/
    const menuLinks = document.querySelectorAll('.header__nav-link[data-scroll]');
    if (menuLinks.length > 0) {
        menuLinks.forEach(menuLink => {
            menuLink.addEventListener("click", onMenuLinkClick);
        });

        function onMenuLinkClick(e) {
            e.preventDefault();
            const menuLink = e.target;
            if (menuLink.dataset.scroll && document.querySelector(menuLink.dataset.scroll)) {
                const scrollBlock = document.querySelector(menuLink.dataset.scroll);
                const scrollBlockValue = scrollBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;

                if (burgerMenu.classList.contains('active')) {
                    document.body.classList.remove('lock');
                    burgerMenu.classList.remove('active');
                    menuHeader.classList.remove('active');
                }

                window.scrollTo({
                    top: scrollBlockValue,
                    behavior: "smooth"
                });
            }
        }
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

    function initStars() {
        const stars = $('.stars li');

        stars.on('click', function () {
            $(stars).removeClass('active');
            $(this).toggleClass('active');
        })
    }

    initStars();
    
});

