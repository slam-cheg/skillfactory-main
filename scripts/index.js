const employerReviewsSwiper = new Swiper(".employer-reviews__swiper", {
	loop: false,

	// Navigation arrows
	navigation: {
		nextEl: ".employer-reviews__button_next",
		prevEl: ".employer-reviews__button_prev",
	},
	spaceBetween: 40,
	slidesPerView: 1.2,
	slideToClickedSlide: true,
});
