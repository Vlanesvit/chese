function rotateTariff() {
	const tariffItems = document.querySelectorAll('.rs-tariff__item');

	tariffItems.forEach(item => {
		const btn = item.querySelector('.rs-tariff__foot .rs-btn');

		btn.addEventListener('click', function () {
			item.classList.toggle('_reverse');
		})
	});
}
rotateTariff()