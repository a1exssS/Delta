
const closeButton = document.querySelectorAll('.overlay__close-button')
const overlayBox = document.querySelector('.overlay-box')
if (overlayBox) {
	overlayBox.style.display = 'none'
}

if (document.querySelector('[consultation-overlay]')) {
	const openButton = document.querySelector('[consultation-overlay]');
	const overlay = document.getElementById('consultation-overlay');
	openButton.addEventListener('click', () => {
		overlay.classList.add('active')
		overlayBox.style.display = 'unset';
		document.body.classList.add('overflow')
		document.querySelector('.header').style.filter = "blur(4px)";
		document.querySelector('.main').style.filter = "blur(4px)";
		document.querySelector('.footer').style.filter = "blur(4px)";
		document.querySelector('.navigation').style.filter = "blur(4px)";
	});

	overlay.addEventListener('click', (event) => {
		if (event.target === overlay) {
			overlay.classList.remove('active')
			overlayBox.style.display = 'none';
			document.body.classList.remove('overflow')
			document.querySelector('.header').removeAttribute('style')
			document.querySelector('.main').removeAttribute('style')
			document.querySelector('.footer').removeAttribute('style')
			document.querySelector('.navigation').removeAttribute('style')
		}
	});

}
if (document.querySelector('[project-overlay]')) {
	const openButton = document.querySelector('[project-overlay]');
	const overlay = document.getElementById('project-overlay');
	openButton.addEventListener('click', () => {
		overlay.classList.add('active')
		overlayBox.style.display = 'unset';
		document.body.classList.add('overflow')
		document.querySelector('.header').style.filter = "blur(4px)";
		document.querySelector('.main').style.filter = "blur(4px)";
		document.querySelector('.footer').style.filter = "blur(4px)";
		document.querySelector('.navigation').style.filter = "blur(4px)";
	});

	overlay.addEventListener('click', (event) => {
		if (event.target === overlay) {
			overlay.classList.remove('active')
			overlayBox.style.display = 'none';
			document.body.classList.remove('overflow')
			document.querySelector('.header').removeAttribute('style')
			document.querySelector('.main').removeAttribute('style')
			document.querySelector('.footer').removeAttribute('style')
			document.querySelector('.navigation').removeAttribute('style')
		}
	});

}

if (document.querySelector('[header-overlay]')) {
	const openButton = document.querySelector('[header-overlay]');
	const overlay = document.getElementById('header-overlay');
	openButton.addEventListener('click', () => {
		document.body.classList.add('overflow')
		overlay.classList.add('active')
		overlayBox.style.display = 'unset';
		document.querySelector('.header').style.filter = "blur(4px)";
		document.querySelector('.main').style.filter = "blur(4px)";
		document.querySelector('.footer').style.filter = "blur(4px)";
		document.querySelector('.navigation').style.filter = "blur(4px)";
	});

	overlay.addEventListener('click', (event) => {
		if (event.target === overlay) {
			document.body.classList.remove('overflow')
			overlay.classList.remove('active')
			overlayBox.style.display = 'none';
			document.querySelector('.header').removeAttribute('style')
			document.querySelector('.main').removeAttribute('style')
			document.querySelector('.footer').removeAttribute('style')
			document.querySelector('.navigation').removeAttribute('style')
		}
	});
}

closeButton.forEach((el) => {
	el.addEventListener('click', (event) => {
		document.querySelectorAll('.overlay').forEach((el) => {
			el.classList.remove('active')
			document.body.classList.remove('overflow')
		})
		document.querySelector('.header').removeAttribute('style')
		document.querySelector('.main').removeAttribute('style')
		document.querySelector('.footer').removeAttribute('style')
		document.querySelector('.navigation').removeAttribute('style')
		overlayBox.style.display = 'none';
	});
})