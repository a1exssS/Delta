import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Swiper from 'swiper/bundle';

let MyOfferSwiper;
let MyProjectsSwiper;
let MyHeroSwiper;
let MyResultsPreviewSwiper;
let MyGalery;
let MyThumbnail;

if (document.querySelector('.house-slider__swiper-galery')) {
	MyGalery = new Swiper(".house-slider__swiper-galery", {
		direction: getPositionValue(),
		spaceBetween: 7,
		slidesPerView: getGaleriesValue(),

		freeMode: false,
		watchSlidesProgress: true,
		navigation: {
			nextEl: ".house-slider__swiper-button-next",
			prevEl: ".house-slider__swiper-button-prev"
		},
	});

	MyThumbnail = new Swiper(".house-slider__swiper-thumbnail", {
		loop: true,
		watchOverflow: true,
		watchSlidesVisibility: true,
		watchSlidesProgress: true,
		preventInteractionOnTransition: true,
		direction: "horizontal",
		spaceBetween: 10,
		navigation: {
			nextEl: ".house-slider__button-next",
			prevEl: ".house-slider__button-prev"
		},
		thumbs: {
			swiper: MyGalery
		}
	});

}
if (document.querySelectorAll('.MyResultsPreviewSwiper')) {

	MyResultsPreviewSwiper = new Swiper('.MyResultsPreviewSwiper', {
		direction: 'horizontal',
		loop: true,
		preventClicks: false,
		grabCursor: true,
		preventClicksPropagation: false,
		pagination: {
			clickable: true,
			el: ".swiper-pagination",
		},

	});
}
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
	if (MyGalery) {
		MyGalery.params.direction = getPositionValue();
		MyGalery.params.slidesPerView = getGaleriesValue();
		MyGalery.params.thumbs = {
			swiper: MyGalery
		}
		MyGalery.update();
	}

});

function getPositionValue() {
	return window.innerWidth <= 1500 ? "horizontal" : "vertical";
}
function getGaleriesValue() {
	return window.innerWidth <= 739 && window.innerWidth > 539 ? 3 : window.innerWidth <= 539 ? 2 : 4;
}


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

export { MyOfferSwiper, MyProjectsSwiper, MyHeroSwiper, MyResultsPreviewSwiper, MyThumbnail, MyGalery }

