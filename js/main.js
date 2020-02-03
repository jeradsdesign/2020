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

const app = ()=>{
	navSlide();
}

app();