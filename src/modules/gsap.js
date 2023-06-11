import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
gsap.registerPlugin(ScrollTrigger);

export default  {
  init() {
    // добавить проверку устройства

    var tl = gsap.timeline(
      {
      repeat: 4, 
     /*  repeatDelay: 1 */
      });
    tl.to(".hero__right", {opacity: 0.8, x: 100, duration: 2});
    tl.to(".hero__right", {x: 50, y: 50, duration: 2});
    tl.to(".hero__right", {yPercent: 5, duration: 2});
    tl.to(".hero__right", {x: -30, y: 0, duration: 2});
    tl.to(".hero__right", {x: 0, y: 0, duration: 2});


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
      delay: 1.2,
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
      delay: 1.5,
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