function openServicesMenu() {
	const servicesSidebar = document.querySelector('.rs-services-nav__sidebar')
	const openBtn = document.querySelector('.rs-services-nav__sidebar_open')
	const servicesBody = document.querySelector('.rs-services-nav__sidebar_body')

	window.addEventListener('scroll', function () {
		servicesSidebar.classList.toggle('_bottom-fixed', window.scrollY > 0);
	})

	openBtn.addEventListener('click', function () {
		bodyLockToggle();
		document.documentElement.classList.toggle("menu-services-open");
		openBtn.classList.toggle('_open')
		_slideToggle(servicesBody, 300);
	})
}
openServicesMenu()