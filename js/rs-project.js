/* ====================================
Раскрываем услугу при ховере
==================================== */
const projectPlugin = (indexSlide = 0) => {
	const slides = document.querySelectorAll('.rs-project__item');

	// Запускаем видео, если открыто через моб.браузер 
	const onVideoMobBrauser = () => {
		slides.forEach(slide => {
			const videos = slide.querySelectorAll('.rs-project__img video');
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
			// slide.classList.toggle('_active');
			slide.querySelector('.rs-project__img video').play()
		});
	}

	const clearActiveClasses = () => {
		slides.forEach((slide) => {
			// slide.classList.remove('_active');
			// slide.querySelector('.rs-services__bg video').pause();
		});
	};
};
projectPlugin();