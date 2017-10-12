console.log('common');

$body = $("body");
$window = $(window);

$window.scroll(function() {
	if ( $window.scrollTop() > 0) {
		$body.addClass("is-fixed");
	} else{
		$body.removeClass("is-fixed");
	}
});


$(document).click(function(event) {
	if ($(event.target).closest(".js-btn-nav").length) return;
	$("body").removeClass("is-open");
	event.stopPropagation();
});
$(document).click(function(event) {
	if ($(event.target).closest(".js-lang").length) return;
	$(".header__lang").removeClass("is-open");
	event.stopPropagation();
});




$(document).ready(function() {

	$("a.tabs__trigger").click(function(e) {
		e.preventDefault();
	});
	// tabs
	$('ul.tabs__caption').on('click', 'li:not(.is-active)', function() {
		$(this)
		.addClass('is-active').siblings().removeClass('is-active')
		.closest('div.tabs').find('div.tabs__content').removeClass('is-active')
		.eq($(this).index()).addClass('is-active');
	});

	//animate scroll
	$('.js-scroll-to').on("click", function(e){
		e.preventDefault();
		var anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $(anchor.attr('href')).offset().top
		}, 1000);
	});

	// modal window
	window.popup = {
		open: function() {
			$('.js-popup').addClass('is-active');
			$('body').addClass('is-open-modal');
		},
		close: function() {
			$('.js-popup').removeClass('is-active');
			$('body').removeClass('is-open-modal');
		}
	};

	$(document).on('click', function(e) {
		if (!$('.js-popup').hasClass('is-active')) return;
		if ($(e.target).closest('.js-popup-container').length) return;
		if ($(e.target).closest('.js-popup-open').length) return;
		$('.js-popup').removeClass('is-active');
		$('body').removeClass('is-open-modal');
	})

	// accordion
	$(".js-accordion-link").click(function(e){
		e.preventDefault();

		var thisBlock = $(this).parent().index('.js-accordion-box');
		$(".js-accordion-box").find(".is-active").not($(this)).removeClass("is-active");
		$(this).toggleClass("is-active").next().slideToggle("fast");
		$(this).parent().toggleClass("is-active").siblings()
		.removeClass("is-active").children(".accordion__container").hide("fast");
		return false;
	});


	var $sliderPhoto = $(".js-slider-photo");

	$sliderPhoto.slick({
		autoplay: true,
		dots: true,
		autoplaySpeed: 333000,
		arrows: true,
		centerMode: true,
		centerPadding: '20px',
		draggable: true,
		responsive: [
		{
			breakpoint: 768,
			settings: {
				arrows: false,
				dots: true
			}
		},
		{
			breakpoint: 767,
			settings: {
				dots: true,
				arrows: false
			}
		}
		]
	});

	$(".js-select").select2({
		minimumResultsForSearch: -1,
		width: '100%'
	});

	// transparent input, etx
	$('input').each(function(){
		var placeholder = $(this).attr('placeholder');

		$(this).focus(function(){
			$(this).attr('placeholder', '');
		});
		$(this).blur(function(){
			$(this).attr('placeholder', placeholder);
		});
	});

	$(".js-lang").click(function(event) {
		event.preventDefault();
		$(this).parent().toggleClass("is-open");
	});

	$(".js-dropdown").click(function(event) {
		event.preventDefault();
		$(this).parent().toggleClass("is-open");
	});

	// burger
	$(".js-btn-nav").click(function(){
		$('body').toggleClass('is-open');
	});

	// map scroll disable
	$('.map-container').click(function () {
		$('.map-container iframe').css("pointer-events", "auto");
	});
	$( ".map-container" ).mouseleave(function() {
		$('.map-container iframe').css("pointer-events", "none");
	});
});