window.addEventListener('scroll', e => {
	document.documentElement.style.setProperty('--scrollTop', `${this.scrollY}px`) // Update method
})
gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
ScrollSmoother.create({
	wrapper: '.wrapper',
	content: '.content'
})

const t = document.querySelector(`title`), w = 'dobrastro_ksenia', e = `💫💫💫💫💫`;
let c = 0;
setInterval(() => {
	c = (c < w.length) ? c + 1 : 0;
	t.textContent = w.slice(0, c);
	if (c === w.length) setTimeout(() => t.textContent += ` ${e}`, 500);
}, 500);