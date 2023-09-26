/* ====================================
Инициализация слайдера rs-services
==================================== */
function initServicesSlider() {
	if (document.querySelector('.rs-services__slider')) {
		'use strict';
		// До этой ширины слайдер будет неактивным
		const breakpoint = window.matchMedia('(min-width: 991.98px)');

		let services;

		const breakpointChecker = function () {
			if (breakpoint.matches === true) {
				if (services !== undefined) services.destroy(true, true);
				return;
			} else if (breakpoint.matches === false) {
				return enableSwiper();
			}
		};

		// Инициализация слайдера
		const enableSwiper = function () {
			services = new Swiper('.rs-services__slider', {
				// Автопрокрутка
				autoplay: {
					// Пауза между прокруткой
					delay: 5000,
					// Закончить на последнем слайде
					stopOnLastSlide: false,
					// Отключить после ручного переключения
					disableOnInteraction: true,
				},

				// Обновить свайпер
				// при изменении элементов слайдера
				observer: true,
				// при изменении родительских элементов слайдера
				observeParents: true,
				// при изменении дочерних элементов слайдера
				observeSlideChildren: true,

				// Скорость смены слайдов
				speed: 500,

				// Включение/отключение
				// перетаскивание на ПК
				simulateTouch: true,
				// Чувствительность свайпа
				touchRadio: 1,
				// Угол срабатывания свайпа/перетаскивания
				touchAngle: 45,
				// Cобытие touchstart (pointerdown)
				touchStartPreventDefault: true,

				// Курсор перетаскивания
				grabCursor: true,

				// Брекпоинты (адаптив)
				breakpoints: {
					320: {
						slidesPerView: 1.08,
						spaceBetween: 20,
					},
					540: {
						slidesPerView: 2,
						spaceBetween: 20,
					},
				},
			});
		};

		breakpoint.addListener(breakpointChecker);
		breakpointChecker();
	}
}

window.addEventListener("load", function (e) {
	// Запуск инициализации слайдера
	initServicesSlider();
});

/* ====================================
Раскрываем услугу при ховере
==================================== */
const servicesPlugin = (indexSlide = 0) => {
	const slides = document.querySelectorAll('.rs-services__slide');
	slides[indexSlide].classList.add('_active');
	slides[indexSlide].querySelector('.rs-services__bg video').play()

	// Запускаем видео, если открыто через моб.браузер 
	const onVideoMobBrauser = () => {
		slides.forEach(slide => {
			const videos = slide.querySelectorAll('.rs-services__bg video');
			videos.forEach(video => {
				// video.play();
			});
		});
	}
	if (document.documentElement.classList.contains("touch")) {
		onVideoMobBrauser()
	}

	for (const slide of slides) {
		slide.addEventListener('mouseenter', () => {
			clearActiveClasses();
			slide.classList.toggle('_active');
			slide.querySelector('.rs-services__bg video').play()
		});
	}

	const clearActiveClasses = () => {
		slides.forEach((slide) => {
			slide.classList.remove('_active');
			// slide.querySelector('.rs-services__bg video').pause();
		});
	};
};
servicesPlugin();