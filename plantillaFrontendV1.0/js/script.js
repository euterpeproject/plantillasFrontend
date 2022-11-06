/**
 * WEBSITE: http://euterpe.v6.army
 * FACEBOOK: https://www.facebook.com/euterpe1a
 * GITHUB: https://github.com/euterpeproject
 */
(function ($) {
    'use strict';

    /* ========================================================================= */
	/*	Precargador de página
	/* ========================================================================= */

    $(window).on('load', function () {
        //preloader
        $('.preloader').fadeOut(700);

        //Filtrado del portafolio
        var containerEl = document.querySelector('.filtr-container');
        var filterizd;
        if (containerEl) {
            filterizd = $('.filtr-container').filterizr({});
        }
        //Active changer
        $('.portfolio-filter button').on('click', function () {
            $('.portfolio-filter button').removeClass('active');
            $(this).addClass('active');
        });

    });

	/* ========================================================================= */
	/*	Control deslizante de publicación de imagen
	/* ========================================================================= */
	$('#post-thumb, #gallery-post').slick({
		infinite: true,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 4000
	});
	$('#features').slick({
		infinite: true,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 4000
	});

    /* ========================================================================= */
	/*	Magnific popup
	/* =========================================================================  */
    $('.image-popup').magnificPopup({
        type: 'image',
        removalDelay: 160,  //Retrasar la eliminación por X para permitir la animación.
        callbacks: {
            beforeOpen: function () {
                //solo un truco que agrega la clase mfp-anim al marcado
                this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
                this.st.mainClass = this.st.el.attr('data-effect');
            }
        },
        closeOnContentClick: true,
        midClick: true,
        fixedContentPos: false,
        fixedBgPos: true
    });

	//   magnific popup video
	$('.popup-video').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-zoom-in',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: true
	});

    // counterUp
	function counter() {
		var oTop;
		if ($('.jsCounter').length != 0) {
			oTop = $('.jsCounter').offset().top - window.innerHeight;
		}
		if ($(window).scrollTop() > oTop) {
			$('.jsCounter').each(function () {
				var $this = $(this),
				countTo = $this.attr('data-count');
				$({
					countNum: $this.text()
				}).animate({
					countNum:countTo
				}, {
					duration: 500,
					easing: 'swing',
					step: function () {
						$this.text(Math.floor(this.countNum));
					},
					complete: function () {
						$this.text(this.countNum);
					}
				});
			});
		}
	}

	$(window).on('scroll', function () {
		counter();
	});

	/* ========================================================================= */
	/*	Testimonios Carousel
	/* =========================================================================  */
	//Inicio del carousel
	$('#testimonials').slick({
		infinite: true,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 4000
	});

	/* ========================================================================= */
	/*	Desplazamiento suave
	/* ========================================================================= */
	$('a.nav-link, .smooth-scroll').click(function (e) {
		if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				e.preventDefault();
				$('html, body').animate({
					scrollTop: target.offset().top
				}, 1000, function () {
					var $target = $(target);
					$target.focus();
					if ($target.is(':focus')) {
						return false;
					} else {
						$target.attr('tabindex', '-1');
						$target.focus();
					}
				});
			}
		}
	});

}) (jQuery);
//Fin de la función Jquery

/* ========================================================================= */
/*	Sección animada
/* ========================================================================= */
var wow = new WOW({
    offset: 100, //distancia al elemento al activar la animación (el valor predeterminado es 0)
    mobile: false //desencadenar animaciones en dispositivos móviles (el valor predeterminado es verdadero)
});
wow.init();