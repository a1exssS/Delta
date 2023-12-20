if (document.querySelector('.header__items nav')) {

	const baseElement = document.querySelectorAll('.header__item')[3];
	const targetElement = document.querySelector('.header__items nav');
	const sourceElement = document.querySelector('.header__button');
	if (window.innerWidth < 740) {
		moveElement(sourceElement, targetElement);
	}
	window.addEventListener('resize', () => {
		if (window.innerWidth < 740) {
			moveElement(sourceElement, targetElement);
		} else {
			moveBackElement(sourceElement, baseElement)
		}
	})
	function moveElement(source, target) {
		if (source && target) {
			target.appendChild(source);
		} else {
			return
		}
	}
	function moveBackElement(source, target) {
		if (source && target) {
			target.appendChild(source);
		} else {
			return
		}
	}
}
