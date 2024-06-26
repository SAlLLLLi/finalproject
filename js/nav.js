"use strict";

const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.header-links');
    const navLinks = document.querySelectorAll('.header-links li')
    
    burger.addEventListener('click',()=> {
        //toggle nav
        nav.classList.toggle('header-active');

          // animate links
        navLinks.forEach((link, index) => {
            if (link.style.animation){
                link.style.animation = ''
            }
            else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.6 }s`;
            }  
        });
        //burger animation
        burger.classList.toggle('toggle');
  
    });

 
}


navSlide();
