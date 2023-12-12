import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'
const menu = document.querySelector('[data-menu]')
const openButton = document.querySelector('[data-menu-open]')
const closeButton = document.querySelector('[data-menu-close]')
const headerLinks = document.querySelectorAll('.header__item')


headerLinks.forEach(event => {
	event.addEventListener('click', () => {
		if (menu) {
			menu.dataset.menu = 'close'
			enableBodyScroll(menu)
			openButton.innerHTML = `
				<svg width="32px" height="32px">
					<use xlink:href="src/Images/sprite.svg#close" />
				</svg>`
		}

	})
})
function toggleMenu() {
	if (menu && menu.getAttribute('data-menu') === 'open') {
		menu.dataset.menu = 'close'
		enableBodyScroll(menu)
		openButton.innerHTML = `
			<svg class="header__img-icon" >
				<use xlink: href = "src/Images/sprite.svg#menu" />
			</svg>`
	} else {
		if (menu) {
			menu.dataset.menu = 'open'
			disableBodyScroll(menu)
			openButton.innerHTML = `
			<svg class="header__img-icon">
				<use xlink:href="src/Images/sprite.svg#close" />
			</svg>`
		}
	}
}

openButton.addEventListener('click', toggleMenu)
closeButton.addEventListener('click', toggleMenu)