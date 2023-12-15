import 'swiper/css';
import 'swiper/css/navigation';
import Swiper from 'swiper/bundle';

let MyOfferSwiper: Swiper;
let MyProjectsSwiper: Swiper;
let MyHeroSwiper: Swiper;

if (document.querySelector('.myOfferSwiper')) {

	MyOfferSwiper = new Swiper('.myOfferSwiper', {
		direction: 'horizontal',
		loop: true,
		preventClicks: false,
		preventClicksPropagation: false,
		navigation: {
			nextEl: '.offer__swiper-button-next',
			prevEl: '.offer__swiper-button-prev',
		},

	});
}
if (document.querySelector('.myProjectsSwiper')) {

	MyProjectsSwiper = new Swiper('.myProjectsSwiper', {
		direction: 'horizontal',
		loop: true,
		slidesPerView: getWidthValue(),
		spaceBetween: getSpaceValue(),
		navigation: {
			nextEl: '.projects__swiper-button-next',
			prevEl: '.projects__swiper-button-prev',
		},

	});
}
if (document.querySelector('.myHeroSwiper')) {

	MyHeroSwiper = new Swiper('.myHeroSwiper', {
		direction: 'horizontal',
		loop: true,
		slidesPerView: getWidthValueHero(),
		autoplay: {
			delay: 3000,
		},
		spaceBetween: 5,

	});
}

window.addEventListener('resize', () => {
	if (MyHeroSwiper) {
		MyHeroSwiper.params.slidesPerView = getWidthValueHero()
		MyHeroSwiper.params.autoplay = {
			delay: 3000
		}
		MyHeroSwiper.update()
	}
	if (MyProjectsSwiper) {
		MyProjectsSwiper.params.slidesPerView = getWidthValue();
		MyProjectsSwiper.params.spaceBetween = getSpaceValue()
		MyProjectsSwiper.update();
	}

});

function getWidthValue() {
	if (window.innerWidth <= 739) {
		return 1;
	}
	else if (window.innerWidth <= 920) {
		return 2;
	}
	else if (window.innerWidth <= 1300) {
		return 3;
	}
	else {
		return 4;
	}
}
function getWidthValueHero() {
	if (window.innerWidth <= 920 && window.innerWidth > 650) {
		return 3;
	} else if (window.innerWidth <= 650) {
		return 2
	}
	else {
		return 4
	}
	// else if(window.innerWidth )
}
function getSpaceValue() {
	if (window.innerWidth <= 1000) {
		return 20;
	} else if (window.innerWidth > 1000) {
		return 40;
	} else {
		return 0;
	}
}

export { MyOfferSwiper, MyProjectsSwiper, MyHeroSwiper }