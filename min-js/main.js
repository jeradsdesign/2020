const navSlide=()=>{const e=document.querySelector(".burger"),t=document.querySelector(".top-menu"),a=document.querySelectorAll(".top-menu a");e.addEventListener("click",()=>{t.classList.toggle("nav-active"),a.forEach((e,t)=>{e.style.animation?e.style.animation="":e.style.animation=`navLinkFade .5s ease forwards ${t/7+.3}s`}),e.classList.toggle("toggle")})},app=()=>{navSlide()};navSlide();