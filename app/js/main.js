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



