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

var $loader = document.querySelector('.loader');
var $btn = document.querySelector('.btn');

// GSAP animation function
function startGSAPAnimation() {
    gsap.from(".elevate", {
        y: 100, // Starting position
        opacity: 0, // Optional for fade-in effect
        duration: 1, // Animation duration
        ease: "power2.out", // Easing function
    });
    gsap.from(" .space", {
        y: 200, // Starting position
        opacity: 0, // Optional for fade-in effect
        duration: 1, // Animation duration
        ease: "power2.out", // Easing function
    });
    gsap.from(".eleg", {
        y: 300, // Starting position
        opacity: 0, // Optional for fade-in effect
        duration: 1, // Animation duration
        ease: "power2.out", // Easing function
    });
}

window.onload = function () {
    $loader.classList.remove('loader--active');
    // Trigger GSAP animation when loader disappears
    startGSAPAnimation();
};




// mouse folow
document.addEventListener("DOMContentLoaded", () => {
  const cursorOuter = document.querySelector(".cursor-outer");
  const imgr = document.querySelector("img");

  let mouseX = 0, mouseY = 0;
  let outerX = 0, outerY = 0;

  // Track mouse position
  document.addEventListener("mousemove", (event) => {
    mouseX = event.clientX;
    mouseY = event.clientY;
    cursorInner.style.top = `${mouseY}px`;
    cursorInner.style.left = `${mouseX}px`;
  });

  // Animate the outer cursor
  function animateOuterCursor() {
    outerX += (mouseX - outerX) / 10;
    outerY += (mouseY - outerY) / 10;

    cursorOuter.style.top = `${outerY}px`;
    cursorOuter.style.left = `${outerX}px`;

    requestAnimationFrame(animateOuterCursor);
  }
  requestAnimationFrame(animateOuterCursor);

});

document.addEventListener("DOMContentLoaded", () => {
  const cursorOuter = document.querySelector(".cursor-outer");

  // Add hover effect on all <img> elements
   const hoverElements = document.querySelectorAll("img, button, ul, .product");
   hoverElements.forEach((img) => {
    img.addEventListener("mouseover", () => {
      cursorOuter.style.transform = "scale(7)";
      cursorOuter.style.opacity = "0.5";
    });

    img.addEventListener("mouseout", () => {
      cursorOuter.style.transform = "scale(1)";
      cursorOuter.style.opacity = "1";
    });
  });
  const prod1 = document.querySelectorAll(".product1");
  const prod2 = document.querySelectorAll(".product2");
  const prod3 = document.querySelectorAll(".product3");
  const prod4 = document.querySelectorAll(".product4");
  const prod5 = document.querySelectorAll(".product5");
  const prod6 = document.querySelectorAll(".product6");
  const prod7 = document.querySelectorAll(".product7");
  const prod8 = document.querySelectorAll(".product8");
  const prod9 = document.querySelectorAll(".product9");
  const prod10 = document.querySelectorAll(".product10");
  const prod11 = document.querySelectorAll(".product11");
  const prod12= document.querySelectorAll(".product12");

prod1.forEach(item => {
  item.addEventListener("mouseover", () => {
    item.style.backgroundImage = "url('/imgs/imgs-2/furniture_product_13_3.webp')";
  });
  
  item.addEventListener("mouseout", () => {
    item.style.backgroundImage = ""; // Reset the background on mouse out
  });
});
prod2.forEach(item => {
  item.addEventListener("mouseover", () => {
    item.style.backgroundImage = "url('/imgs/imgs-2/furniture_product_14_8-1.webp')";
  });
  
  item.addEventListener("mouseout", () => {
    item.style.backgroundImage = ""; // Reset the background on mouse out
  });
});
prod3.forEach(item => {
  item.addEventListener("mouseover", () => {
    item.style.backgroundImage = "url('/imgs/imgs-2/furniture_product_15_3-1.webp')";
  });
  
  item.addEventListener("mouseout", () => {
    item.style.backgroundImage = ""; // Reset the background on mouse out
  });
}); 
prod4.forEach(item => {
  item.addEventListener("mouseover", () => {
    item.style.backgroundImage = "url('/imgs/imgs-2/furniture_product_16_4.webp')";
  });
  
  item.addEventListener("mouseout", () => {
    item.style.backgroundImage = ""; // Reset the background on mouse out
  });
});
prod5.forEach(item => {
  item.addEventListener("mouseover", () => {
    item.style.backgroundImage = "url('/imgs/imgs-2/furniture_product_17_4.webp')";
  });
  
  item.addEventListener("mouseout", () => {
    item.style.backgroundImage = ""; // Reset the background on mouse out
  });
});
prod6.forEach(item => {
  item.addEventListener("mouseover", () => {
    item.style.backgroundImage = "url('/imgs/imgs-2/furniture_product_18_6-1.webp')";
  });
  
  item.addEventListener("mouseout", () => {
    item.style.backgroundImage = ""; // Reset the background on mouse out
  });
});
prod12.forEach(item => {
  item.addEventListener("mouseover", () => {
    item.style.backgroundImage = "url('/imgs/imgs-2/furniture_product_17_4.webp')";
  });
  
  item.addEventListener("mouseout", () => {
    item.style.backgroundImage = ""; // Reset the background on mouse out
  });
});
prod11.forEach(item => {
  item.addEventListener("mouseover", () => {
    item.style.backgroundImage = "url('/imgs/imgs-2/furniture_product_18_6-1.webp')";
  });
  
  item.addEventListener("mouseout", () => {
    item.style.backgroundImage = ""; // Reset the background on mouse out
  });
});

 
});







$btn.addEventListener('click', function () {
    $loader.classList.add('loader--active');

    window.setTimeout(function () {
        $loader.classList.remove('loader--active');
        // Trigger GSAP animation after loader is removed
        startGSAPAnimation();
    }, 5000); // Set timeout for 5 seconds
});


