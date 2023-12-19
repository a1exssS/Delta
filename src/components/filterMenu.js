import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'
if (document.querySelector('.filter__options-item')) {
	const menu = document.querySelector('[data-search]')
	const openSearchButton = document.querySelector('[data-search-open]')
	const closeSearchButton = document.querySelector('[data-search-close]')
	const searchLinks = document.querySelectorAll('.filter__options-item')


	searchLinks.forEach(event => {
		event.addEventListener('click', () => {
			if (menu) {
				menu.dataset.menu = 'close'
				enableBodyScroll(menu)
			}

		})
	})
	function toggleSearchMenu() {
		if (menu && menu.getAttribute('data-search') === 'open') {
			menu.dataset.search = 'close'
			enableBodyScroll(menu)
		} else {
			if (menu) {
				menu.dataset.search = 'open'
				disableBodyScroll(menu)
			}
		}
	}

	openSearchButton.addEventListener('click', toggleSearchMenu)
	closeSearchButton.addEventListener('click', toggleSearchMenu)

}