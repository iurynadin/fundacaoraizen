(function ($) {
    $(".navbar-burger").on("click", function (event) {
        toggleMenu();
        console.log("menu");
        event.preventDefault();
    });
    function toggleMenu() {
        $(".navbar-burger").toggleClass("is-active");
        if (window.innerWidth <= 1213) {
            console.log('teste')
            $(".secondaryNav").toggleClass("is-active");
        }
    }

    $(".secondaryNav__menu li a").on(
        "click",
        function (event) {
            event.preventDefault();
            toggleMenu();
            console.log('sai menu')
            var url = $(this).attr("href");
            setTimeout(function () {
                $("html, body")
                    .stop()
                    .animate({ scrollTop: $(url).offset().top, }, 800, "easeInOutExpo" );
            }, 200);

        }
    );

    $(".sidebar__menu li a").on( "click", function (event) {
            event.preventDefault();
            var url = $(this).attr("href");
            var duration = ($(this).data("duration")) ? $(this).data("duration") : 800;
            $("html, body")
                .stop()
                .animate({ scrollTop: $(url).offset().top, }, duration, "easeInOutExpo" );

        }
    );

    $(".sidebar").hover(
        function(){
            console.log('mouseover');
            $('.sidebar__menu').toggleClass('is-hovered')
        },
        function(){
            console.log('mouseleave');
            $('.sidebar__menu').toggleClass('is-hovered')
        }
    );
    
    lc_mouseDrag('#inner', 0.3, false, false);
    
})(jQuery);

function init() {
    window.addEventListener("scroll", function (e) {
        var distanceY =
                window.pageYOffset ||
                document.documentElement.scrollTop,
            shrinkOn = 500,
            hamb = document.querySelector("hamb");

        if (distanceY > shrinkOn) {
            $(".header").addClass("is-spying");
            // $(".topNav").addClass("is-active");
        } else {
            $(".header").removeClass("is-spying");
            // $(".topNav").removeClass("is-active");
        }
    });
}
window.onload = init();

  
    