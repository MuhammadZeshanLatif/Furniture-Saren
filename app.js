const lenis = new Lenis({
    duration: 1, 
    // easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t));
    easing: (t) => Math.pow(t, 0.5)
  });
  
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);
  
  gsap.registerPlugin(ScrollTrigger);

let sections = gsap.utils.toArray(".product");

gsap.to(sections, {
  xPercent: -73 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".products",
    pin: true,
    // markers:true,
    scrub: 1,
    snap: 1 / (sections.length - 1),
    start:"top 20%",
    end: () => "+=" + document.querySelector(".products").offsetWidth
  }
});

