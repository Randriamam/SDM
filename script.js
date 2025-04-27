document.addEventListener('DOMContentLoaded', function() {
    // Exemple d'alerte au soumission du formulaire
    const contactForm = document.querySelector('form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Empêche l'envoi réel du formulaire pour l'exemple
            alert('Merci de nous avoir contactés. Nous vous répondrons dès que possible.');
            contactForm.reset(); // Réinitialise le formulaire
        });
    }

    // Gestion des liens au survol
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(function(link) {
        link.addEventListener('mouseover', function() {
            link.style.color = '#ff6600'; // Changer la couleur du texte au survol
        });
        link.addEventListener('mouseout', function() {
            link.style.color = ''; // Restaure la couleur d'origine lorsque l'on quitte le lien
        });
    });
});
