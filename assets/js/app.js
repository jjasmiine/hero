// ()

let cardTog = document.querySelector('.open');
let menuTog = document.querySelector('.close')
let nav = document.querySelector('.nav');
let navLeft = document.querySelector('.nav-left');
let navRight = document.querySelector('.nav-right');
let navLinks = Array.from(document.querySelectorAll('.nav-link'));
let contact = document.querySelector('.contact');


menuTog.addEventListener('click', () => {
    cardTog.classList.toggle('active');
    menuTog.classList.toggle('active');
    nav.classList.toggle('active');
    navRight.classList.toggle('active');
    navLeft.classList.toggle('active');

    contact.classList.remove('active');
    navRight.classList.remove('active');

})


cardTog.addEventListener('click', () => {
    cardTog.classList.toggle('active');
    menuTog.classList.toggle('active');
    nav.classList.toggle('active');
    navRight.classList.toggle('active');
    navLeft.classList.toggle('active');

    contact.classList.remove('active');
    navRight.classList.remove('active');

    if (cardTog.classList.contains('active')) {
        setTimeout(() =>
            navRight.classList.add('active'), 100)

        for (let i = 0; i < navLinks.length; i++) {
            navLinks[i].classList.remove('active');
            setTimeout(() => {
                navLinks[i].classList.add('active')
            }, i * 300)
        }

        setTimeout(() => {
            contact.classList.add('active')
        }, 700);
    }
})