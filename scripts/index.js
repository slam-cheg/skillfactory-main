const employerReviewsSwiper = new Swiper(".employer-reviews__swiper", {
	loop: false,
	navigation: {
		nextEl: "#employer-reviews-next-btn",
		prevEl: "#employer-reviews-prev-btn",
	},
	spaceBetween: 40,
	slidesPerView: 1.2,
	slideToClickedSlide: true,
});

const freeMaterialsSwiper = new Swiper(".free-materials__swiper", {
	loop: false,
	navigation: {
		nextEl: "#free-materials-prev-btn",
		prevEl: "#free-materials-next-btn",
	},
	spaceBetween: 20,
	slidesPerView: 3,
	slideToClickedSlide: true,
});

const reviewsSwiper = new Swiper(".reviews__swiper", {
	loop: false,
	navigation: {
		nextEl: "#reviews-next-btn",
		prevEl: "#reviews-prev-btn",
	},
	spaceBetween: 40,
	slidesPerView: 1.2,
	slideToClickedSlide: true,
})
