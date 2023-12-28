import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

const scrollTop = window.pageYOffset || document.documentElement.scrollTop
const aboutSectionLocation = document.querySelector('.header')
const rect = aboutSectionLocation.getBoundingClientRect()
const top = rect.top + scrollTop
const linkToTop = document.querySelector('.footer__go-back')
linkToTop.addEventListener('click', function (e) {
	e.preventDefault()
	gsap.to(window, {
		duration: 1.2,
		scrollTo: top,
		ease: 'expo.out',
	})
})

if (document.querySelector('.about-work__number')) {
	gsap.fromTo(
		'.about-work__number',
		{
			opacity: 0,
			x: -30,
		},
		{
			opacity: 1,
			x: 0,
			stagger: .2,
			scrollTrigger: {
				trigger: '.about-work__title',
				start: 'center 94%',
				end: 'bottom 38%',
			},
		}
	)
}
if (document.querySelector('.advancements__item')) {
	gsap.fromTo(
		'.advancements__item',
		{
			opacity: 0,
			scale: 0,
		},
		{
			opacity: 1,
			scale: 1,
			stagger: .2,
			scrollTrigger: {
				trigger: '.advancements__title',
				start: 'top 94%',
				end: 'center 38%',
			},
		}
	)
}