
window.onbeforeunload = function () {
	window.scrollTo(0, 0);
};
gsap.config({ trialWarn: false });
gsap.registerPlugin(ScrollTrigger)
// gsap.registerPlugin(drawSVGPlugin);
// console.clear();

/* Smooth Scroll */
SmoothScroll({
	animationTime: 600, // [ms]
	stepSize: 100, // [px]
	accelerationDelta: 50,  // 50
	accelerationMax: 3,   // 3
	touchpadSupport: false,
});

/* REVEAL ANIMATION */
function showContentOnScroll(elem, duration, delay, direction) {
	const elems = gsap.utils.toArray(elem);
	elems.forEach((item, i) => {
		let anim;

		switch (true) {
			case direction === 'bottom-up':
				anim = gsap.fromTo(item, { autoAlpha: 0, y: 50 }, { autoAlpha: 1, y: 0, x: 0, delay: delay, duration: duration });
				break;
			case direction === 'right-left':
				anim = gsap.fromTo(item, { autoAlpha: 0, x: 50 }, { autoAlpha: 1, y: 0, x: 0, delay: delay, duration: duration });
				break;
			case direction === 'up-bottom':
				anim = gsap.fromTo(item, { autoAlpha: 0, y: -50 }, { autoAlpha: 1, y: 0, x: 0, delay: delay, duration: duration });
				break;
			case direction === 'left-right':
				anim = gsap.fromTo(item, { autoAlpha: 0, x: -50 }, { autoAlpha: 1, y: 0, x: 0, delay: delay, duration: duration });
				break;
			case direction === 'fade':
				anim = gsap.fromTo(item, { autoAlpha: 0 }, { autoAlpha: 1, delay: delay, duration: duration });
				break;
			case direction === 'bottom-up--every':
				anim = gsap.fromTo(item, { autoAlpha: 0, y: 50 }, { autoAlpha: 1, y: 0, x: 0, delay: delay * (i + 1), duration: duration });
				break;
			case direction === 'right-left--every':
				anim = gsap.fromTo(item, { autoAlpha: 0, x: 50 }, { autoAlpha: 1, y: 0, x: 0, delay: delay * (i + 1), duration: duration });
				break;
			case direction === 'up-bottom--every':
				anim = gsap.fromTo(item, { autoAlpha: 0, y: -50 }, { autoAlpha: 1, y: 0, x: 0, delay: delay * (i + 1), duration: duration });
				break;
			case direction === 'left-right--every':
				anim = gsap.fromTo(item, { autoAlpha: 0, x: -50 }, { autoAlpha: 1, y: 0, x: 0, delay: delay * (i + 1), duration: duration });
				break;
			case direction === 'fade--every':
				anim = gsap.fromTo(item, { autoAlpha: 0 }, { autoAlpha: 1, delay: delay * (i + 1), duration: duration });
				break;

			default:
				break;
		}

		ScrollTrigger.create({
			trigger: item,
			animation: anim,
			once: true,
			// scrub: true,
			// markers: 1,

			onEnter: () => function () { },
			onLeave: () => function () { },
			onEnterBack: () => function () { },
			onLeaveBack: () => function () { },
		});
	});
}

function animDesktop() {
	/* ====================================
	Скролл проектов
	==================================== */
	let galleryProject = document.querySelector(".rs-project__list");
	gsap.to(galleryProject, {
		y: () => -(galleryProject.scrollHeight - document.documentElement.clientHeight),
		ease: "none",
		scrollTrigger: {
			trigger: '.rs-project',
			pin: 0,
			// markers: true,
			scrub: 2,
			start: "top top",
			end: "bottom+=50% bottom",
			invalidateOnRefresh: true
		}
	});

}

function animMobile() {

}

function animCommon() {
	showContentOnScroll('.section-title', 0.5, 0.3, 'bottom-up');
	showContentOnScroll('.rs-slider__body .ubd-regular-47', 0.5, 0.2, 'bottom-up');
	showContentOnScroll('.rs-slider__body .ubd-regular-23', 0.5, 0.3, 'bottom-up');
	showContentOnScroll('.rs-slider__circle', 0.5, 0.3, 'left-right');
	showContentOnScroll('.rs-tariff__circle-1', 0.5, 0.3, 'left-right');
	showContentOnScroll('.rs-tariff__circle-2', 0.5, 0.3, 'left-right');
	showContentOnScroll('.rs-slider__social', 0.5, 0.4, 'bottom-up');
	showContentOnScroll('.rs-numbers__item', 0.5, 0.3, 'bottom-up--every');
	showContentOnScroll('.rs-services__slide', 0.5, 0.3, 'bottom-up--every');
	showContentOnScroll('.rs-tariff__item', 0.5, 0.3, 'bottom-up--every');

	/* ====================================
	Движение линии с текстом
	==================================== */
	const textLines = document.querySelectorAll(".text-line")
	textLines.forEach(textline => {
		let roundtexts = textline.querySelectorAll(".text-line-content");
		var roundtext_tl = gsap.timeline();
		let dur = 100;
		roundtexts.forEach(roundtext => {
			gsap.fromTo(
				roundtext,
				{ attr: { startOffset: "100%" } },
				{
					duration: dur,
					attr: { startOffset: "-100%" },
					ease: "none",
					scrollTrigger: {
						trigger: textline,
						pin: false,
						// markers: true,
						scrub: 2,
						start: "top-=50% center",
						end: "bottom+=50% center",
						onEnter: doCoolStuff()
					}
				}
			);
			roundtext_tl.reversed(true);
			function doCoolStuff() {
				roundtext_tl.reversed(!roundtext_tl.reversed());
			}
		});
	});
}

window.addEventListener("DOMContentLoaded", function () {
	const breakpoint = window.matchMedia('(min-width: 991.98px)');
	const breakpointChecker = function () {
		animCommon()
		if (breakpoint.matches === true) {
			return animDesktop();
		} else if (breakpoint.matches === false) {
			return animMobile();
		}
	};
	breakpoint.addListener(breakpointChecker);
	breakpointChecker();
})
ScrollTrigger.refresh()

function callResize() {
	if (typeof (Event) === 'function') {
		// modern browsers
		window.dispatchEvent(new Event('resize'));
	} else {
		// for IE and other old browsers
		// causes deprecation warning on modern browsers
		var evt = window.document.createEvent('UIEvents');
		evt.initUIEvent('resize', true, false, window, 0);
		window.dispatchEvent(evt);
	}
}
setTimeout(() => {
	callResize()
}, 100);