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

//smooth scroll
function smoothScroll(target, duration){
	var target = document.querySelector(target);
	var targetPosition = target.getBoundingClientRect().top;
	var startPosition = window.pageYOffset;
	var distance = targetPosition - startPosition;
	var startTime = null;

	function animation(currentTime){
		if(startTime === null) startTime = currentTime;
		var timeElapsed = currentTime - startTime;
		var run = ease(timeElapsed, startPosition, distance, duration);
		window.scrollTo(0,run);
		if(timeElapsed < duration) requestAnimationFrame(animation);
	}

	  function ease(t, b, c, d) {
	    t /= d / 2;
	    if (t < 1) return c / 2 * t * t + b;
	    t--;
	    return -c / 2 * (t * (t - 2) - 1) + b;
	  }

	requestAnimationFrame(animation);
}

var scrollElement = document.querySelector('.home .scrollLink');

scrollElement.addEventListener('click', function(e){
	e.preventDefault();
	smoothScroll('.scrollTarget', 1500);
});


const app = ()=>{
	navSlide();
}

app();