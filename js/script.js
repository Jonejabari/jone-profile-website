let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open')
};

const sr = ScrollReveal ({
    distance: '40px',
    duration: 2500,
    reset: true
});

// Smooth scrolling for contacts link
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


sr.reveal('.logo',{delay:200, origin:'left'});
sr.reveal('.navbar',{delay:400, origin:'top'});
sr.reveal('.menu-btn',{delay:520, origin:'right'});

sr.reveal('.home-text span',{delay:600, origin:'top'});
sr.reveal('.home-text h1',{delay:680, origin:'left'});
sr.reveal('.home-text p',{delay:680, origin:'right'});
sr.reveal('.main-btn',{delay:860, origin:'left'});

sr.reveal('.share',{delay:950, origin:'bottom'});
sr.reveal('.home-img',{delay:1000, origin:'right'});

document.addEventListener('DOMContentLoaded', function() {
    const currentYear = new Date().getFullYear();
    const copyrightElement = document.querySelector('footer p');
    copyrightElement.innerHTML = `&copy; ${currentYear} Jone Jabari. All Rights Reserved.`;
});