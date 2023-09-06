document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.smooth').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });




    // script.js
    const images = document.querySelectorAll(".image-animation");
    const imageContainer = document.querySelector(".image-container");

    const observer = new IntersectionObserver(entries => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add("active");
                }, index * 300); // Délai progressif en millisecondes
            } else {
                entry.target.classList.remove("active");
            }
        });
    });

    images.forEach(image => {
        observer.observe(image);
    });

// Optionnel : réinitialisez les animations lorsque l'utilisateur remonte la page
    window.addEventListener("scroll", () => {
        const scrollY = window.scrollY || window.pageYOffset;
        if (scrollY === 0) {
            images.forEach(image => {
                image.classList.remove("active");
            });
        }
    });


});
