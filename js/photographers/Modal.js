
export default class Modal {
    
    // Evénements lancement du modal en cliquant sur le bouton 'contactez-moi'.
    // Et fermeture sur l'icone 'X'.
    modal(data) {
          
        let modalButton = document.getElementById("photograph-contact");
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

        // Focus à l'ouverture du Modal.
        document.addEventListener("focus", function(event) {

            const focusForm = document.getElementById("form-dialog");
        
            if (!focusForm.contains(event.target)) {

                event.stopPropagation();

                focusForm.focus();

            }
        
        }, true);

        let modalBackground = document.getElementById("form-dialog");

        modalBackground.style.display = 'block';

    }

    // Fermeture du Modal.
    closeModal() {

        let modalBackground = document.getElementById("form-dialog");
        // Fermeture du Modal avec la touche "Escape".
        document.addEventListener('keydown', (key) => {

            if (key.code == "Escape") {

                modalBackground.style.display = 'none';
    
            }
        })
        
        modalBackground.style.display = 'none';

    }

    // Affichage du nom d'un photographe dans le titre du formulaire.
    formPhName(data) {

        let id = window.location.search.split('id=')[1];
        let photographers = !id ? data : data.filter(photographer => photographer.id == id);
        let phName = document.getElementById('photograph-form-name');
        let phNameTemplate = `${photographers[0].name}`
        phName.innerHTML = phNameTemplate;
        
    }
}
