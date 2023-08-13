document.addEventListener("DOMContentLoaded", function() {
    const classeLinks = document.querySelectorAll(".classe-link");

    classeLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const selectedClass = this.getAttribute("data-classe");
            loadVideos(selectedClass);
        });
    });
});

function loadVideos(selectedClass) {
    // Utilisez le code que je vous ai précédemment fourni pour charger les vidéos en fonction de la classe sélectionnée
    // Assurez-vous de mettre à jour le contenu de la div chapitre-content
}
