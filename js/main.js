// Menu Scroll
$('a[href*="#"]')
	// Remove links that don't actually link to anything
	.not('[href="#"]')
	.not('[href="#0"]')
	.click(function (event) {
		// On-page links
		if (
			location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
			location.hostname == this.hostname
		) {
			// Figure out element to scroll to
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			// Does a scroll target exist?
			if (target.length) {
				// Only prevent default if animation is actually gonna happen
				event.preventDefault();
				$('html, body').animate({
					scrollTop: target.offset().top
				}, 2000, function () {
					// Callback after animation
					// Must change focus!
					var $target = $(target);
					$target.focus();
					if ($target.is(":focus")) { // Checking if the target was focused
						return false;
					} else {
						$target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
						$target.focus(); // Set focus again
					};
				});
			}
		}
	});


// navMenu

(function ($) {
	$('.dropdown-menu a.dropdown-toggle').on('click', function (e) {
		if (!$(this).next().hasClass('show')) {
			$(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
		}
		var $subMenu = $(this).next(".dropdown-menu");
		$subMenu.toggleClass('show');

		$(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function (e) {
			$('.dropdown-submenu .show').removeClass("show");
		});

		return false;
	});
})(jQuery)


/*==========Owl Carousel Banners Main Section=========*/
var owl = $(".main-demo .owl-carousel").owlCarousel({
	autoplayTimeout: 6000,
	autoplay: true,
	items: 1,
	loop: true,
	dots: true,
	nav: true,
	onDragged: setDelay,
	rtl: true,
	navText: ["", ""],
});

owl.on('initialized.owl.carousel translated.owl.carousel', function () {
	setDelay();
});


/*==========Owl Carousel Banners =========*/
function setDelay() {
	owl.trigger('stop.owl.autoplay');

	var defaultTiming = 10000;
	var carouselTiming = $('.main-demo .owl-item.active .item').data('timing') ? $('.home-banner .owl-item.active .item').data('timing') : defaultTiming;

	setTimeout(function () {
		owl.trigger('next.owl.carousel', [carouselTiming]);
	}, carouselTiming);
}

//Skill Barr Animation
$(document).ready(function () {
	$('.level').waypoint(function () {
		$('.level').css({
			animation: "animate-positive 7s",
			opacity: "1"
		});
	}, {
		offset: '75%'
	});

});

document.addEventListener("DOMContentLoaded", function () {

	var progressBar = document.querySelectorAll(".skill-bar");
	var time = 7000;

	progressBar.forEach(function (i) {
		let label = i.children[0];
		let line = i.children[1];
		let count = 0;
		let dataCount = label.getAttribute("data-count");
		let lineCount = line.children[0];

		let runTime = time / dataCount;

		let animationLineCount = setInterval(function () {
			if (count < dataCount) {
				count++;
				label.innerHTML = count + '%';
				lineCount.style.width = count + '%';
			}
		}, runTime);
	});
});

// owlCarousel iPads


$(function () {
	// Owl Carousel
	var owl = $(".ipads-demo .owl-carousel");
	owl.owlCarousel({
		items: 1,
		nav: false,
		autoplay: true,
		loop: true,
		margin: 10,
		dots: false,
		rtl: true,
		autoplay: 100000, // time for slides changes
		smartSpeed: 1000, // duration of change of 1 slide
	});
});


/*==========Scrollup btn=========*/
$(function () {
	// при нажатии на кнопку scrollup
	$('.scrollup').click(function () {
		// переместиться в верхнюю часть страницы
		$("html, body").animate({
			scrollTop: 0
		}, 2000);
	})
})
// при прокрутке окна (window)
$(window).scroll(function () {
	// если пользователь прокрутил страницу более чем на 200px
	if ($(this).scrollTop() > 200) {
		// то сделать кнопку scrollup видимой
		$('.scrollup').fadeIn();
	}
	// иначе скрыть кнопку scrollup
	else {
		$('.scrollup').fadeOut();
	}
});

$('html, body').animate({
	scrollTop: $("#target-element").offset().top
}, 2000);

//Scroll Spy
$('body').scrollspy({
	target: '#navbar-example'
})


// MDB Bootstrap Animation
new WOW().init();