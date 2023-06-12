import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
gsap.registerPlugin(ScrollTrigger);

export default  {
  init() {
    // добавить проверку устройства
    const imgC = document.querySelector('.hero__right');

    const tl = gsap.timeline(
      {
      repeat: 2, 
     /*  repeatDelay: 1 */
      });
    tl.to(imgC, {opacity: 0.8, x: 100, duration: 2});
    tl.to(imgC, {x: 50, y: 50, duration: 2});
    tl.to(imgC, {yPercent: 5, duration: 2});
    tl.to(imgC, {x: -30, y: 0, duration: 2});
    tl.to(imgC, {x: 0, y: 0, duration: 2});

    imgC.addEventListener('mousemove', (e) => {
      console.log('mousemover', e.clientY, e.clientX)
      gsap.to(imgC, {
        duration: 0.5,
        overwrite: "auto",
        x: e.clientX/7,
        y: e.clientY/8,
        stagger: 0.15,
        ease: "none"
      });
    })


/*     gsap.from('.hero__right', {
      x: 43,
      y: 20,
      xPercent: 30,
      yPercent: 30,
      // repeat: -1,
      opacity: 0,
      duration: 1.5,
      delay: 0.2,
    }) */

    gsap.from('.h1', {
      x: -100,
      opacity: 0,
      duration: 1.5,
      delay: 0.4,
    })

    gsap.from('.advantages__list', {
    scrollTrigger: {
      trigger: '.advantages',
      start: '-550 0',
      // scrub: true,
      markers: false,
    }, 
    y: 100,
    opacity: 0,
    duration: 1,
    delay: 0.1,
    })

    gsap.from('.works__item._1', {
      scrollTrigger: {
        trigger: '.works',
        start: '-400 0',
        // scrub: true,
        markers: false,
      }, 
      x: -100,
      opacity: 0,
      duration: 1.2,
      delay: 0.2,
    })

    gsap.from('.works__item._2', {
      scrollTrigger: {
        trigger: '.works',
        start: '-300 0',
        // scrub: true,
        markers: false,
      }, 
      x: 100,
      opacity: 0,
      duration: 1.2,
      delay: 0.8,
    })

    gsap.from('.works__item._3', {
      scrollTrigger: {
        trigger: '.works',
        start: '00 0',
        // scrub: true,
        markers: false,
      }, 
      x: -100,
      opacity: 0,
      duration: 1.2,
      delay: 1.5,
    })


    gsap.from('.works__item._4', {
      scrollTrigger: {
        trigger: '.works',
        start: '300 0',
        // scrub: true,
        markers: false,
      }, 
      x: 100,
      opacity: 0,
      duration: 1.2,
      delay: 2,
    })

    gsap.from('.tilda__item._1', {
      scrollTrigger: {
        trigger: '.tilda',
        start: '-850 0',
        // scrub: true,
        markers: false,
      }, 
      x: -50,
      opacity:0,
      duration: 1.2,
      delay: 0.2,
    })

    gsap.from('.tilda__item._2', {
      scrollTrigger: {
        trigger: '.tilda',
        start: '-850 0',
        // scrub: true,
        markers: false,
      }, 
      x: -50,
      opacity:0,
      duration: 1.2,
      delay: 0.5,
    })

    gsap.from('.tilda__item._3', {
      scrollTrigger: {
        trigger: '.tilda',
        start: '-850 0',
        // scrub: true,
        markers: false,
      }, 
      x: -50,
      opacity:0,
      duration: 1.2,
      delay: 0.7,
    })

    gsap.from('.we__item', {
      scrollTrigger: {
        trigger: '.we',
        start: '-750 0',
        // scrub: true,
        markers: false,
      }, 
     scale: 0,
     duration: 1,
    })
  }
}