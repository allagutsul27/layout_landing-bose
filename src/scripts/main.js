import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline();

tl.fromTo(
  '.header__title',
  {
    y: -200,
    opacity: 0,
  },
  {
    y: 0,
    opacity: 1,
    duration: 1,
  }
).fromTo(
  '.header__logo',
  {
    x: -50,
    opacity: 0,
  },
  {
    x: 0,
    opacity: 1,
    duration: 1,
  }
).fromTo(
  '.header__contact-us',
  {
    x: -50,
    opacity: 0,
  },
  {
    y: 0,
    opacity: 1,
    duration: 0.8,
    stagger: 0.25,
  }
);

gsap.from('.recommended__title', {
  scrollTrigger: {
    trigger: '.recommended',
    start: '-200 0',
    opacity: 1,
  },
  opacity: 0,
  y: -50,
  scale: 0.5,
  duration: 1,
  scrub: true,
});

gsap.from('.recommended__items', {
  scrollTrigger: {
    trigger: '.recommended',
    start: '-200 0',
    opacity: 1,
  },
  x: -100,
  opacity: 0,
  stagger: 0.5,
  duration: 1,
  scrub: true,
});

gsap.from('.categories__title', {
  scrollTrigger: {
    trigger: '.categories',
    start: '-200 100',
    opacity: 1,
  },
  x: -100,
  opacity: 0,
  duration: 1,
});

gsap.from('.categories__subtitle', {
  scrollTrigger: {
    trigger: '.categories',
    start: '-200 0',
    opacity: 1,
  },
  duration: 1,
  x: -100,
  opacity: 0,
});

gsap.from('.categories__row', {
  scrollTrigger: {
    trigger: '.categories',
    start: '-200 0',
    opacity: 1,
  },
  duration: 0.8,
  x: 50,
  opacity: 0,
  delay: 0.5,
  stagger: 2,
});

gsap.from('.buy__title', {
  scrollTrigger: {
    trigger: '.buy',
    start: '-200 0',
    opacity: 1,
  },
  duration: 1,
  y: -250,
  opacity: 0,
});

gsap.from('.buy__benefits', {
  scrollTrigger: {
    trigger: '.buy',
    start: '-200 0',
    opacity: 1,
  },
  duration: 1,
  x: 150,
  opacity: 0,
});

gsap.from('.contacts__title', {
  scrollTrigger: {
    trigger: '.contacts',
    start: '-300 0',
    opacity: 1,
  },
  duration: 1,
  x: 150,
  y: -180,
  opacity: 0,
});

gsap.from('.contacts__form', {
  scrollTrigger: {
    trigger: '.contacts',
    start: '-200 0',
    opacity: 1,
  },
  duration: 1,
  x: -350,
  opacity: 0,
});

gsap.from('.contacts__info', {
  scrollTrigger: {
    trigger: '.contacts',
    start: '-200 0',
    opacity: 1,
  },
  duration: 1,
  x: 150,
  opacity: 0,
});

gsap.from('.footer', {
  scrollTrigger: {
    trigger: 'footer',
    start: '0 500',
    opacity: 1,
  },
  duration: 1,
  y: 250,
  opacity: 0,
});

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#nav') {
    document.body.classList.add('page__content--with-nav');
  } else {
    document.body.classList.remove('page__content--with-nav');
  }
});

const form = document.querySelector('form');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  form.reset();
});
