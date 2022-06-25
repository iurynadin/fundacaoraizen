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

    $(".hero").hover(
        function(){
            console.log('mouseover');
            $('.tglBg, #lua').addClass('is-active');
            $('.ball').addClass('fadeout');
        },
        function(){
            console.log('mouseleave');
            $('.tglBg, #lua').removeClass('is-active');
            $('.ball').removeClass('fadeout');
        }
    );
    
})(jQuery);

function init() {
    window.addEventListener("scroll", function (e) {
        var distanceY =
                window.pageYOffset ||
                document.documentElement.scrollTop,
            shrinkOn = 500,
            hamb = document.querySelector("hamb");

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
}
window.onload = init();

  
    