
const closeButton = document.querySelectorAll('.overlay__close-button')
const submitOverlayButton = document.querySelectorAll('.overlay__button')
const overlayBox = document.querySelector('.overlay-box')
overlayBox.style.display = 'none'

if (document.querySelector('[consultation-overlay]')) {
	const openButton = document.querySelector('[consultation-overlay]');
	const overlay = document.getElementById('consultation-overlay');
	openButton.addEventListener('click', () => {
		overlay.style.display = 'flex';
		overlayBox.style.display = 'unset';
		document.body.style.overflow = 'hidden'
		document.querySelector('.header').style.filter = "blur(4px)";
		document.querySelector('.main').style.filter = "blur(4px)";
		document.querySelector('.footer').style.filter = "blur(4px)";
		document.querySelector('.navigation').style.filter = "blur(4px)";
	});

	overlay.addEventListener('click', (event) => {
		if (event.target === overlay) {
			overlay.style.display = 'none';
			overlayBox.style.display = 'none';
			document.body.style.overflow = 'unset'
			document.querySelector('.header').style.filter = "unset";
			document.querySelector('.main').style.filter = "unset";
			document.querySelector('.footer').style.filter = "unset";
			document.querySelector('.navigation').style.filter = "unset";
		}
	});

}
if (document.querySelector('[project-overlay]')) {
	const openButton = document.querySelector('[project-overlay]');
	const overlay = document.getElementById('project-overlay');
	openButton.addEventListener('click', () => {
		overlay.style.display = 'flex';
		overlayBox.style.display = 'unset';
		document.body.style.overflow = 'hidden'
		document.querySelector('.header').style.filter = "blur(4px)";
		document.querySelector('.main').style.filter = "blur(4px)";
		document.querySelector('.footer').style.filter = "blur(4px)";
		document.querySelector('.navigation').style.filter = "blur(4px)";
	});

	overlay.addEventListener('click', (event) => {
		if (event.target === overlay) {
			overlay.style.display = 'none';
			overlayBox.style.display = 'none';
			document.body.style.overflow = 'unset'
			document.querySelector('.header').style.filter = "unset";
			document.querySelector('.main').style.filter = "unset";
			document.querySelector('.footer').style.filter = "unset";
			document.querySelector('.navigation').style.filter = "unset";
		}
	});

}

if (document.querySelector('[header-overlay]')) {
	const openButton = document.querySelector('[header-overlay]');
	const overlay = document.getElementById('header-overlay');
	openButton.addEventListener('click', () => {
		overlay.style.display = 'flex';
		overlayBox.style.display = 'unset';
		document.body.style.overflow = 'hidden'
		document.querySelector('.header').style.filter = "blur(4px)";
		document.querySelector('.main').style.filter = "blur(4px)";
		document.querySelector('.footer').style.filter = "blur(4px)";
		document.querySelector('.navigation').style.filter = "blur(4px)";
	});

	overlay.addEventListener('click', (event) => {
		if (event.target === overlay) {
			overlay.style.display = 'none';
			overlayBox.style.display = 'none';
			document.body.style.overflow = 'unset'
			document.querySelector('.header').style.filter = "unset";
			document.querySelector('.main').style.filter = "unset";
			document.querySelector('.footer').style.filter = "unset";
			document.querySelector('.navigation').style.filter = "unset";
		}
	});
}

closeButton.forEach((el) => {
	el.addEventListener('click', (event) => {
		document.querySelectorAll('.overlay').forEach((el) => {
			el.style.display = 'none';
		})
		overlayBox.style.display = 'none';
		document.body.style.overflow = 'unset'
		document.querySelector('.header').style.filter = "unset";
		document.querySelector('.main').style.filter = "unset";
		document.querySelector('.footer').style.filter = "unset";
		document.querySelector('.navigation').style.filter = "unset";
	});
})
