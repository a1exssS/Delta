const navigation = document.querySelector('.navigation');
let lastScrollTop = 199;
window.addEventListener('scroll', () => {
	let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
	if (scrollTop > lastScrollTop) {
		navigation.classList.add('navigation__move')
		navigation.style.transform = "translateY(0px)"

	} else {
		navigation.classList.remove('navigation__move')
		navigation.style.transform = "translateY(0px)"
	}
})
