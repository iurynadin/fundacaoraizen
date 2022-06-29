(function ($) {
    $(".navbar-burger").on("click", function (event) {
        toggleMenu();
        console.log("menu");
        event.preventDefault();
    });
    function toggleMenu() {
        $(".navbar-burger").toggleClass("is-active");
        $(".secondaryNav").toggleClass("is-active");
    }

    function goto(url) {
        $("html, body")
            .stop()
            .animate({ scrollTop: $(url).offset().top, }, 800, "easeInOutExpo" );
    }

    $(".secondaryNav__menu li a").on( "click", function (event) {
            event.preventDefault();
            toggleMenu();
            console.log('sai menu')
            var url = $(this).attr("href");
            setTimeout(function () {
                goto(url)
            }, 200);

        }
    );

    $(".heroNav li a, .backToTop").on( "click", function (event) {
        event.preventDefault();
        var url = $(this).attr("href");
        console.log('url')
        goto(url)
    });

    var vid = document.getElementById('raizenVideo');
    $("#showVideoModal").on( "click", function (event) {
        event.preventDefault();
        $(".modalVideo").toggleClass("is-active");
        vid.play();
    });
    $(".closeModal").on( "click", function (event) {
        event.preventDefault();
        $(".modalVideo").toggleClass("is-active");
        vid.pause();
    });

    $(".hero").hover(
        function(){
            console.log('mouseover');
            $('.tglBg, .lua, .xtoggle').addClass('is-active');
            $('.ball').addClass('fadeout');
        },
        function(){
            console.log('mouseleave');
            $('.tglBg, .lua, .xtoggle').removeClass('is-active');
            $('.ball').removeClass('fadeout');
        }
    );

    $(".quad4").hover(
        function(){
            $('.fillquad4').addClass('is-active');
        },
        function(){
            $('.fillquad4').removeClass('is-active');
        }
    );

    var swiper = new Swiper('.swiperInfancia', {
        loop: true,
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            type: "bullets"
        },
        navigation: {
            nextEl: '.next',
            prevEl: '.prev',
        },
    });

    var swiperMensagem = new Swiper('.swiperMensagem', {
        loop: true,
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        pagination: {
            el: ".swiper-pagination2",
            type: "bullets"
        },
        navigation: {
            nextEl: '.nextMsg',
            prevEl: '.prevMsg',
        },
    });

    var swiperJuventude = new Swiper('.swiperJuventude', {
        loop: true,
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        pagination: {
            el: '.swiper-pagination3',
            clickable: true,
            type: 'bullets'
        },
        navigation: {
            nextEl: '.nextJuv',
            prevEl: '.prevJuv',
        },
    });

    $('.nextSlide').on('click', function (event) {
        event.preventDefault()
        swiperJuventude.slideNext();
    });
    $('.prevSlide').on('click', function (event) {
        event.preventDefault()
        swiperJuventude.slideNext();
    });
    
})(jQuery);

function fixedMenu() {
    window.addEventListener("scroll", function (e) {
        var distanceY =
                window.pageYOffset ||
                document.documentElement.scrollTop,
            logoAppearance = 500;

        if (distanceY > logoAppearance) { /* exibe */
            $(".logoFixed").addClass("is-spying");
        } else {
            $(".logoFixed").removeClass("is-spying");
        }
    });
}
window.onload = fixedMenu();

function hambMenu() {
    if (window.innerWidth >= 768) {
        window.addEventListener("scroll", function (e) {
            var distanceY =
                    window.pageYOffset ||
                    document.documentElement.scrollTop,
                shrinkOn = 500;
    
            if (distanceY > shrinkOn) { /* exibe */
                $(".navbar-burger").addClass("is-spying");
            } else {
                $(".navbar-burger").removeClass("is-spying");
                if($(".secondaryNav").hasClass("is-active")){
                    $(".secondaryNav").removeClass("is-active");
                    $(".navbar-burger").removeClass("is-active");
                }
            }
        });
        console.log('desktop')
    } else {
        console.log('navbar-burguer');
        $(".navbar-burger").addClass("is-spying");
    }
}
window.onload = hambMenu();

window.addEventListener('resize', function(event) {
    hambMenu();
    fixedMenu();
    console.log('resize')
}, true);
    