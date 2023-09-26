/* ====================================
Инициализация слайдера в блоке rs-about-team
==================================== */
function initTeamSliders() {
	const sliderBlocks = document.querySelectorAll('.rs-about-team');

	sliderBlocks.forEach(block => {
		const slider = block.querySelector('.rs-about-team__slider')
		// const sliderPag = block.querySelector('.rs-about-team__pagination')
		const sliderNext = block.querySelector('.rs-about-team__button-next')
		const sliderPrev = block.querySelector('.rs-about-team__button-prev')

		// Перечень слайдеров
		if (slider) {
			const swiperMain = new Swiper(slider, {
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

				// Стрелки
				navigation: {
					nextEl: sliderNext,
					prevEl: sliderPrev,
				},

				// // Пагинация
				// pagination: {
				// 	el: sliderPag,
				// 	clickable: true,
				// 	// type: 'progressbar',
				// },

				// Брекпоинты (адаптив)
				breakpoints: {
					320: {
						slidesPerView: 1.1,
						spaceBetween: 20,
					},
					539.98: {
						slidesPerView: 2,
						spaceBetween: 20,
					},
					767.98: {
						slidesPerView: 2,
						spaceBetween: 30,
					},
					991.98: {
						slidesPerView: 2,
						spaceBetween: 20,
					},
					1169.98: {
						slidesPerView: 3,
						spaceBetween: 20,
					},
					1439.98: {
						slidesPerView: 4,
						spaceBetween: 20,
					},
				},
			});
		}
	});

}
window.addEventListener("load", function (e) {
	// Запуск инициализации слайдеров
	initTeamSliders();
});