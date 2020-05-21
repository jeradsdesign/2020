const navSlide = () => {
	const burger = document.querySelector('.burger');
	const nav = document.querySelector('.top-menu');
	const navLinks = document.querySelectorAll('.top-menu a');
	// Toggle Nav
	burger.addEventListener('click', ()=>{
		nav.classList.toggle('nav-active');

		//Animate Links
		navLinks.forEach((link, index) => {
			if(link.style.animation){
				link.style.animation = '';
			}else{
				link.style.animation = `navLinkFade .5s ease forwards ${index / 7 + .3}s`;
			}
			
		});
		// Burger Animation
		burger.classList.toggle('toggle');

	});
}

// on page load actions
// const elementsOnload = document.querySelector(".action-onload");
// document.addEventListener("DOMContentLoaded", ()=>{
// 	elementsOnload.classList.add("activate");
// });

// slide in on Scroll
function debounce(func, wait = 20, immediate = true) {
      var timeout;
      return function() {
        var context = this, args = arguments;
        var later = function() {
          timeout = null;
          if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
      };
}
const elements = document.querySelectorAll(".action");
const triggerMultiplier = 1.5;
const windowHeight = window.innerHeight - 35;

scrollAppear = () => {
  elements.forEach(element => {
    //   get each element's distance from top of screen & computed height
    let positionFromTop = element.getBoundingClientRect().top;
    let elementHeight = parseInt(window.getComputedStyle(element).height);

    // trigger animation on scroll down
    if (positionFromTop < windowHeight) {
      element.classList.add("activate");
    }

    // re-hide elements after leaving the screen
    if (
      positionFromTop > windowHeight * triggerMultiplier ||
      positionFromTop < -elementHeight
    ) {
      // element.classList.remove("activate");
    }
  });
};
// run function when scrolling
window.addEventListener("scroll", debounce(scrollAppear));

// end of slide in on Scroll


const app = ()=>{
	navSlide();
}

app();