import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
gsap.registerPlugin(ScrollTrigger);

export default  {
  init() {
    // добавить проверку устройства
    gsap.from('.hero__left', {
      x: -1000,
      opacity: 0,
      duration: 2,
      delay: 0.5,
    })

    gsap.from('.advantages__list', {
    scrollTrigger: {
      trigger: '.advantages',
      start: '-400 0',
      // scrub: true,
      markers: true,
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
        markers: true,
      }, 
      x: -100,
      opacity: 0,
      duration: 1.2,
      delay: 0.1,
    })

    gsap.from('.works__item._2', {
      scrollTrigger: {
        trigger: '.works',
        start: '-200 0',
        // scrub: true,
        markers: true,
      }, 
      x: 100,
      opacity: 0,
      duration: 1.2,
      delay: 0.1,
    })

    gsap.from('.works__item._3', {
      scrollTrigger: {
        trigger: '.works',
        start: '-100 0',
        // scrub: true,
        markers: true,
      }, 
      x: -100,
      opacity: 0,
      duration: 1.2,
      delay: 0.1,
    })


    gsap.from('.works__item._4', {
      scrollTrigger: {
        trigger: '.works',
        start: '-100 0',
        // scrub: true,
        markers: true,
      }, 
      x: 100,
      opacity: 0,
      duration: 1.2,
      delay: 0.1,
    })

    gsap.from('.tilda__item._1', {
      scrollTrigger: {
        trigger: '.tilda',
        start: '-850 0',
        // scrub: true,
        markers: true,
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
        markers: true,
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
        markers: true,
      }, 
      x: -50,
      opacity:0,
      duration: 1.2,
      delay: 0.7,
    })
  }
}