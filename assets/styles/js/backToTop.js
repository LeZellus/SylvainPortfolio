const scrollToTopButton = document.getElementById('scrollToTop');

// Afficher ou masquer le bouton en fonction du défilement
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopButton.classList.remove('hidden');
    } else {
        scrollToTopButton.classList.add('hidden');
    }
});

// Faire défiler vers le haut lorsque le bouton est cliqué
scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});