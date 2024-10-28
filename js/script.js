// toggle icon navbar menu hamburger
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}


// efecto de scroll y cambio de link activo
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            })
        }
    })

    // sticky header
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // remove toggle icon and navbar when clic en el enlace de la barra de navegación (desplazarse)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
}

// scroll reveal
ScrollReveal({
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
})

ScrollReveal().reveal('.home-content, .heading, .contact form', { origin: 'top' });
ScrollReveal().reveal('.home-img img, .about-img img, .education-row, .input-box, .textarea-box, .skills-box', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-content h3, .circle-spin, .education-column, .skills-content', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content p, .btn-box.btns, .skills-row', { origin: 'right' });

// typed js animacion escritura
const typed = new Typed('.multiple-text', {
    strings: ['Software Developer', 'FrontEnd Developer', 'SQL Developer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
})
