// cursour
new kursor({
	type: 1,
	removeDefaultCursor: true,
	color: '#ffffff'
});

// burger menu
const menu = document.querySelector('.header__menu')
const menuBtn = document.querySelector('.header__icon')

const body = document.body;

if (menu && menuBtn) {
	menuBtn.addEventListener('click', () => {
		menu.classList.toggle('active')
		menuBtn.classList.toggle('active')
		body.classList.toggle('lock')
	})

	menu.querySelectorAll('.menu__item').forEach(link => {
		link.addEventListener('click', () => {
			menu.classList.remove('active')
			menuBtn.classList.remove('active')
			body.classList.remove('lock')
		})
	})
}
// smooth
const lenis = new Lenis()

lenis.on('scroll', (e) => {
	console.log(e)
})

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time) => {
	lenis.raf(time * 600)
})

gsap.ticker.lagSmoothing(0);

// preloader
function setupLoader() {
	var loaderWrapper = document.querySelector(".loader-wrapper");
	var body = document.body;

	body.classList.add("lock");

	if (loaderWrapper) {
		setTimeout(function () {
			loaderWrapper.style.transition = "opacity 1s ease, filter 1s ease";
			loaderWrapper.style.opacity = "0";
			loaderWrapper.style.filter = "blur(10px)";
			setTimeout(function () {
				loaderWrapper.style.display = "none";
				body.classList.remove("lock");
			}, 1000); 
		}, 6500); 
	}
	setTimeout(function () {
		window.scrollTo(0, 0);
	}, 1000);
}

window.addEventListener("load", setupLoader);

window.addEventListener("beforeunload", setupLoader);


// audio player
document.addEventListener('DOMContentLoaded', function() {
	const audio = document.querySelector('audio');
	const icon = document.querySelector('.audio-icon-toggle');
	const animationElements = document.querySelectorAll('.animate-on-play');
	function startAnimation() {
		animationElements.forEach(element => {
			element.style.animationPlayState = 'running';
		});
	}
	function pauseAnimation() {
		animationElements.forEach(element => {
			element.style.animationPlayState = 'paused';
		});
	}

	audio.play();
	icon.classList.add('is-active');
	startAnimation();

	document.querySelector('.audio-container').addEventListener('click', function() {
		if (audio.paused) {
			audio.play();
			icon.classList.add('is-active');
			startAnimation();
		} else {
			audio.pause();
			icon.classList.remove('is-active');
			pauseAnimation();
		}
	});
});

// scroll split
gsap.registerPlugin(ScrollTrigger);

const splitTypes = document.querySelectorAll('.split');

splitTypes.forEach((char, i) => {
	const text = new SplitType(char, { types: 'words' });

	gsap.from(text.words, {
		scrollTrigger: {
			trigger: char,
			start: 'top 90%',
			end: 'top 20%',
			scrub: true,
			markers: false
		},
		y: 50,
		opacity: 0,
		duration: 1,
		stagger: 0.05
	});
});

// scroll split2 
gsap.registerPlugin(ScrollTrigger);

const splitType = document.querySelectorAll('.sub');

splitType.forEach((char, i) => {
	const text = new SplitType(char, { types: 'lines' });

	gsap.from(text.lines, {
		scrollTrigger: {
			trigger: char,
			start: 'top 90%',
			end: 'top 60%',
			scrub: true,
			markers: false
		},
		y: 20,
		opacity: 0,
		stagger: 0.05
	});
});

 // gsap animation
 window.addEventListener("load", () => {
	gsap.registerPlugin(ScrollTrigger);

	gsap.from('.progressbar', {
		scrollTrigger: {
			trigger: '.pn1', 
			scrub: true,
			start: 'top top',
			end: () => document.offsetHeight	
		},
		scaleX: 0,
		transformOrigin: 'left center',
		ease: 'none'
	});
});

//animation plugin
ScrollReveal({
	reset: true,
	distance: '60px',
	duration: 2500,
	delay: 400
})
ScrollReveal().reveal('.future', {delay:6500, origin: 'left', reset:false});
ScrollReveal().reveal('.audio-container', {delay:6500, origin: 'right', reset:false});
ScrollReveal().reveal('.info__media', {delay:1000, origin: 'bottom', distance: '100px', reset: false});
ScrollReveal().reveal('.info__number', {delay:500, origin: 'left', reset: false});
ScrollReveal().reveal('.header', {delay:6500, origin: 'top', reset: false});
ScrollReveal().reveal('.contact-us__content', {delay:500, origin: 'bottom', reset: false});
ScrollReveal().reveal('.main__vs', {delay:500, origin: 'left', reset: false});

// play video
document.addEventListener('DOMContentLoaded', function () {
	var video = document.getElementById('myVideo');
	video.pause(); 
	var observer = new IntersectionObserver(function (entries) {
		entries.forEach(function (entry) {
			if (entry.isIntersecting) {
				video.currentTime = 0; 
				video.play(); 
				video.classList.add('playing');
			} else {
				video.pause(); 
				video.classList.remove('playing');
			}
		});
	}, { threshold: 0.5 });
	observer.observe(video);
});

// smooth scroll #
const anchors = document.querySelectorAll('a[href*="#"]');

anchors.forEach(anchor => {
	anchor.addEventListener('click', event => {
		event.preventDefault();

		const blockID = anchor.getAttribute('href').substring(1);

		document.getElementById(blockID).scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		})
	})
})

// mouse x y
let output = document.getElementById('output');
window.addEventListener('mousemove', (e)=>{
	let xPos = e.clientX;
	let yPos = e.clientY;
	output.innerHTML = `<span>X: </span> ${xPos}px <span>Y: ${yPos}px</span>`

})
