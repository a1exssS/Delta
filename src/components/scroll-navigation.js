const navigation = document.querySelector('.navigation');
let lastScrollTop = 170;
window.addEventListener('scroll', () => {
	let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
	if (scrollTop > lastScrollTop) {
		navigation.classList.add('navigation__move')
	}
	else {
		navigation.classList.remove('navigation__move')
	}
})
