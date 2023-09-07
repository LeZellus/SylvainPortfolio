document.addEventListener('DOMContentLoaded', function () {
    // Écouteurs d'événements pour les onglets
    const tabs = document.querySelectorAll('.nav-tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
            e.preventDefault();
            tabs.forEach(t => t.classList.remove('bg-primary-600'));
            tab.classList.add('bg-primary-600');

            // Masquer tous les contenus d'onglets
            document.querySelectorAll('div[id^="onglet"]').forEach(content => {
                content.style.display = 'none';
            });

            // Afficher le contenu de l'onglet correspondant
            const tabId = tab.getAttribute('href').replace('#', '');
            document.getElementById(tabId).style.display = 'block';
        });
    });

    // Sélectionner le premier onglet par défaut
    tabs[0].click();
});
