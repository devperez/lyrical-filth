// Swiper with config
var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

// Zoom and redirection to a new page on click
document.querySelectorAll('.swiper-slide img').forEach((img) => {
    img.addEventListener('click', function () {
        img.classList.add('zoomed');

        setTimeout(() => {
            // Redirection vers la nouvelle page
            window.location.href = img.dataset.link;  // Assurez-vous que chaque image a un attribut data-link avec l'URL
        }, 300);  // Délai pour permettre l'animation de zoom
    });
});

// Navbar handling
document.addEventListener('DOMContentLoaded', function () {
    const navBar = document.querySelector('.nav-bar');
    let timeoutId;

    // Masquer la barre après 5 secondes au chargement
    setTimeout(() => {
        navBar.classList.add('hidden');
    }, 3000);

    // Réafficher la barre si la souris reste en haut 2 secondes
    document.addEventListener('mousemove', function (event) {
        if (event.clientY <= 50) {
            clearTimeout(timeoutId); // Annule tout délai en cours
            timeoutId = setTimeout(() => {
                navBar.classList.remove('hidden');
            }, 1000); // Afficher après 2 secondes
        } else {
            clearTimeout(timeoutId); // Annule si la souris quitte la zone
        }
    });

    // Masquer à nouveau lorsque la souris quitte la barre
    navBar.addEventListener('mouseleave', function () {
        setTimeout(() => {
            navBar.classList.add('hidden');
        }, 1000); // Masque après 2 secondes
    });
});
