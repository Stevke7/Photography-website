function navSlide() {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    //Prikaz Nav-bara
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

        //Animacija li
        navLinks.forEach((link, index) => {
         if (link.style.animation){
             link.style.animation = ''
         } else {
             link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
         }
    });
    //Burger Animacija
    burger.classList.toggle('toggle');
    });
    
    
}
navSlide();

/* Lightbox */
var lightbox = new SimpleLightbox('.gallery a', {/* options */});