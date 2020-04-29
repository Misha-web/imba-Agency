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


	//Scroll
	$("[data-scroll]").on("click", function(event) {
		let blockId = $(this).data('scroll'),
		blockOffset = $(blockId).offset().top;
		$("html, body").animate ({
			scrollTop: blockOffset
		},500);
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


	//Modal
	const modalCol = $("[data-modal]");
	const modalClose = $("[data-close]");

	modalCol.on("click", function(event) {
		event.preventDefault();

		let modalId = $(this).data('modal');

		$(modalId).addClass("show");

		setTimeout(function() {
			$(modalId).find(".modal__wrapper").css({
				transform: "rotateX(0)"
			});
		}, 200);
	});

	modalClose.on("click", function(event) {
		event.preventDefault();

		let modalParent = $(this).parents('.modal');

		modalParent.find(".modal__wrapper").css({
			transform: "rotateX(90deg)"
		});

		setTimeout(function() {
			modalParent.removeClass("show");
		}, 200);

	});

	$(".modal").on("click", function(event) {
		let $this = $(this);
		$this.find(".modal__wrapper").css({
			transform: "rotateX(90deg)"
		});

		setTimeout(function() {
			$this.removeClass("show");
		}, 200);

	});

	$(".modal__wrapper").on("click", function(event) {
		event.stopPropagation();
	});



});



