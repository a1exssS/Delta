import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)
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
document.querySelector('.footer__go-back').addEventListener('click', (e) => {
	e.preventDefault()
	window.scrollTo({ top: 0, behavior: 'smooth' })
})
