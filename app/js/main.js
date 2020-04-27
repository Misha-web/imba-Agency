$(document).ready(function() {
	let headerH = $('#header__body').innerHeight();
	let header = $('#header__inner');
	let scrollOffset = 0;
	$(window).on("scroll", function() {
		scrollOffset = $(this).scrollTop();
		if (scrollOffset >= headerH) {
			header.addClass('fixed');
		} else {
			header.removeClass('fixed');
		}
	});


	$("[data-scroll]").on("click", function(event) {
		let blockId = $(this).data('scroll'),
		blockOffset = $(blockId).offset().top;
		$("html, body").animate ({
			scrollTop: blockOffset
		},500);
	});
});

//Tabs
$(".js-tab-trigger").click(function(event) {
	event.preventDefault();
	let id = $(this).attr('data-tab'),
	content = $('.js-tab-content[data-tab="'+ id +'"]');

	$(".js-tab-trigger.active").removeClass("active");
	$(this).addClass("active");

	$(".js-tab-content.active").removeClass("active");
	content.addClass("active");
});



