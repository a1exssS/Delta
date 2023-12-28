import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'
if (document.querySelector('[data-menu]')) {

	const menu = document.querySelector('[data-menu]')
	const openButton = document.querySelector('[data-menu-open]')
	const closeButton = document.querySelector('[data-menu-close]')

	function toggleMenu() {
		if (menu && menu.getAttribute('data-menu') === 'open') {
			menu.dataset.menu = 'close'
			enableBodyScroll(menu)
			openButton.innerHTML = `
				<svg class="header__img-icon" >
					<use xlink: href = "../src/Images/sprite.svg#menu" />
				</svg>`
		} else {
			if (menu) {
				window.scrollTo({
					top: 0,
					behavior: 'smooth'
				})
				menu.dataset.menu = 'open'
				disableBodyScroll(menu)
				openButton.innerHTML = `
				<svg class="header__img-icon">
					<use xlink:href="../src/Images/sprite.svg#close" />
				</svg>`
			}
		}
	}

	openButton.addEventListener('click', toggleMenu)
	closeButton.addEventListener('click', toggleMenu)
}