import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'
if (document.querySelector('.filter__options-item')) {
	const searchMenu = document.querySelector('[data-search]')
	const openSearchButton = document.querySelector('[data-search-open]')
	const closeSearchButton = document.querySelector('[data-search-close]')
	const searchLinks = document.querySelectorAll('.filter__options-item')


	searchLinks.forEach(event => {
		event.addEventListener('click', () => {
			if (searchMenu) {
				searchMenu.dataset.search = 'open'
				disableBodyScroll(searchMenu)
			}
		})
	})
	function toggleSearchMenu() {
		if (searchMenu && searchMenu.getAttribute('data-search') === 'open') {
			searchMenu.dataset.search = 'close'
			enableBodyScroll(searchMenu)
		} else {
			if (searchMenu) {
				searchMenu.dataset.search = 'open'
				disableBodyScroll(searchMenu)
			}
		}
	}

	openSearchButton.addEventListener('click', toggleSearchMenu)
	closeSearchButton.addEventListener('click', toggleSearchMenu)

}