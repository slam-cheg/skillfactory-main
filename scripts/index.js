const iframeLayout = `<iframe class="videos__iframe" width="100%" height="100%" frameborder="0" allowfullscreen="" src="" allow="autoplay"></iframe>`;
const iframeWrappers = document.querySelectorAll(".videos__iframe-wrapper");

const employerReviewsSwiper = new Swiper(".employer-reviews__swiper", {
	loop: false,
	navigation: {
		nextEl: "#employer-reviews-next-btn",
		prevEl: "#employer-reviews-prev-btn",
	},
	spaceBetween: 40,
	slideToClickedSlide: true,

	breakpoints: {
		320: {
			slidesPerView: 1,
		},
		480: {
			slidesPerView: 0.4,
			freeMode: {
				enabled: true,
				sticky: false,
			},
		},
		640: {
			slidesPerView: 0.6,
		},
		960: {
			slidesPerView: 1.15,
			freeMode: {
				enabled: false,
				sticky: true,
			},
		},
		1199: {
			slidesPerView: 1.12,
		},
	},
});

if (window.outerWidth > 479) {
	const freeMaterialsSwiper = new Swiper(".free-materials__swiper", {
		loop: false,
		navigation: {
			nextEl: "#free-materials-prev-btn",
			prevEl: "#free-materials-next-btn",
		},
		spaceBetween: 20,
		slidesPerView: 3,
		slideToClickedSlide: true,

		breakpoints: {
			480: {
				slidesPerView: 1.3,
			},
			640: {
				slidesPerView: 2,
			},
			960: {
				slidesPerView: 3,
			},
		},
	});
}

const reviewsSwiper = new Swiper(".reviews__swiper", {
	loop: false,
	navigation: {
		nextEl: "#reviews-next-btn",
		prevEl: "#reviews-prev-btn",
	},
	spaceBetween: 40,
	slideToClickedSlide: true,
	breakpoints: {
		320: {
			slidesPerView: 1,
		},
		480: {
			slidesPerView: 0.4,
			freeMode: {
				enabled: true,
				sticky: false,
			},
		},
		640: {
			slidesPerView: 0.6,
		},
		960: {
			slidesPerView: 1.15,
			freeMode: {
				enabled: false,
				sticky: true,
			},
		},
		1199: {
			slidesPerView: 1.12,
		},
	},
});

const videosSwiper = new Swiper(".videos__swiper", {
	loop: false,
	navigation: {
		nextEl: "#videos-prev-btn",
		prevEl: "#videos-next-btn",
	},
	spaceBetween: 60,
	slideToClickedSlide: false,

	breakpoints: {
		320: {
			slidesPerView: 1.2,
			spaceBetween: 20,
		},
		480: {
			slidesPerView: 1.8,
		},
		640: {
			slidesPerView: 2.4,
			spaceBetween: 40,
		},
		960: {
			slidesPerView: 4,
		},
	},
});

const mentorsSwiper = new Swiper(".mentors__swiper", {
	loop: false,
	navigation: {
		nextEl: "#mentors-prev-btn",
		prevEl: "#mentors-next-btn",
	},
	spaceBetween: 20,

	slideToClickedSlide: true,
	breakpoints: {
		480: {
			slidesPerView: 1.5,
			spaceBetween: 20,
		},
		640: {
			slidesPerView: 1.7,
			spaceBetween: 40,
		},
		960: {
			slidesPerView: 3,
		},
	},
});

iframeWrappers.forEach((wrapper) => {
	const playBtn = wrapper.querySelector(".videos__play");
	const preview = wrapper.querySelector(".videos__preview");
	const currentVideoId = wrapper.dataset.video;

	wrapper.addEventListener("click", () => {
		preview.insertAdjacentHTML("afterend", iframeLayout);
		const iframe = wrapper.querySelector(".videos__iframe");
		iframe.src = `https://www.youtube.com/embed/${currentVideoId}?&amp;autoplay=1&amp;rel=0`;
		playBtn.classList.add("videos__play_hidden");
		preview.classList.add("videos__preview_hidden");
	});
});
