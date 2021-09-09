
export default class Modal {
    // Evénements lancement du modal en cliquant sur le bouton 'contactez-moi'.
    // Et fermeture sur l'icone 'X'.
    modal(data) {
        let modalButton = document.getElementById("ph-contact");
        let closeButton = document.getElementsByClassName('close-form-icon');

        if (modalButton) {
            modalButton.addEventListener('click', this.launchModal);
            this.formPhName(data);
        }
        if (closeButton) {
            closeButton[0].addEventListener('click', this.closeModal);
        }
    }

    // Lancement du Modal.
    launchModal() {
        let modalBackground = document.getElementById("form-dialog");

        modalBackground.style.display = 'block';
    }

    // Fermeture du Modal.
    closeModal() {
        let modalBackground = document.getElementById("form-dialog");

        modalBackground.style.display = 'none';
    }

    // Affichage du nom d'un photographe dans le titre du formulaire.
    formPhName(data) {
        let id = window.location.search.split('id=')[1];
        let photographers = !id ? data : data.filter(photographer => photographer.id == id);
        let phName = document.getElementById('ph-form-name');
        let phNameTemplate = `${photographers[0].name}`
        phName.innerHTML = phNameTemplate;
    }
}
