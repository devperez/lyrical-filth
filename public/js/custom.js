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
// document.addEventListener('DOMContentLoaded', function () {
//     const navBar = document.querySelector('.nav-bar');

//     // Attendre 5 secondes avant de déclencher la disparition
//     setTimeout(() => {
//         navBar.classList.add('hidden');

//         // Ajouter la classe `removed` après 2 secondes pour retirer complètement la barre
//         setTimeout(() => {
//             navBar.classList.add('removed');
//         }, 2000); // Correspond à la durée de la transition (2s)
//     }, 5000);
// });

document.addEventListener('DOMContentLoaded', function() {
    const navBar = document.querySelector('.nav-bar');
    let timeoutId;

    // Masquer la barre après 5 secondes au chargement
    setTimeout(() => {
        hideNavBar();
    }, 5000);

    // Fonction pour afficher la barre
    function showNavBar() {
        clearTimeout(timeoutId); // Annule tout délai existant pour éviter des conflits
        navBar.classList.add('visible');
    }

    // Fonction pour masquer la barre
    function hideNavBar() {
        navBar.classList.remove('visible');
    }

    // Vérifier si la souris reste dans la zone pour afficher la barre
    document.addEventListener('mousemove', function(event) {
        // Si la souris est dans les 150 premiers pixels en haut de la page
        if (event.clientY <= 150) {
            // Démarrer le délai pour réafficher la barre
            timeoutId = setTimeout(showNavBar, 2000);
        } else {
            // Annuler le délai si la souris quitte la zone
            clearTimeout(timeoutId);
        }
    });

    // Masquer la barre lorsque la souris la quitte
    navBar.addEventListener('mouseleave', function() {
        setTimeout(hideNavBar, 2000); // Masque la barre après 2 secondes si la souris la quitte
    });
});
