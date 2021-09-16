export default class Form {

    fields() {
        // Validation des champs en récuperant les éléments du DOM.
        let form = document.getElementById('contact-form');
        let firstName = document.getElementById('first-name');
        let lastName = document.getElementById('last-name');
        let email = document.getElementById('email');
        let message = document.getElementById('message');
        const regex = /^[a-zA-ZÀ-ÖØ-öø-ÿ]+$/;

        // Envoie du formulaire
        form.addEventListener('submit', (e) => {

            e.preventDefault();
            // On applique les regex pour vérifier si les champs sont valides.
            let isValid = this.checkNames(firstName, regex) &&
                this.checkNames(lastName, regex) &&
                this.checkEmail(email) &&
                this.checkMessage(message);

            if (isValid) {

                firstName.style.border = 'none';
                lastName.style.border = 'none';
                email.style.border = 'none';
                message.style.border = 'none';
                this.consoleMessageValid(firstName, lastName, email, message);
                document.getElementById('contact-form').reset();

            } else {

                this.errorVerification(firstName, lastName, email, message, regex);

            }
        });
    }
    // Fonction pour écrire les valeurs saisies dans les logs
    consoleMessageValid(firstName, lastName, email, message) {

        console.group('Contact Message');
        console.log('Prénom : ' + firstName.value);
        console.log('Nom : ' + lastName.value);
        console.log('Email : ' + email.value);
        console.log('Message : ' + message.value);
        console.groupEnd();

    }
    // Vérification des erreurs.
    errorVerification(firstName, lastName, email, message, regex) {

        this.checkNames(firstName, regex);
        this.checkNames(lastName, regex);
        this.checkEmail(email);
        this.checkMessage(message);

    }

    // Vérification et validation des champs FirstName et LastName
    checkNames(elt, regex) {

        if (elt.value.trim().length < 2 || elt.value.trim() === "" || !elt.value.match(regex)) {

            elt.parentElement.setAttribute('data-error-visible', 'true');
            elt.style.border = '2px solid #e54858';

            return false;

        } else {

            elt.parentElement.setAttribute('data-error-visible', 'false');
            elt.style.border = 'solid #279e7a 0.19rem';

            return true;

        }
    }
    // Vérification et validation du champ Email
    checkEmail(elt) {

        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (elt.value.trim().match(re)) {

            elt.parentElement.setAttribute('data-error-visible', 'false');
            elt.style.border = 'solid #279e7a 0.19rem';

            return true;

        }

        elt.parentElement.setAttribute('data-error-visible', 'true');
        elt.style.border = '2px solid #e54858';

        return false;

    }
    // Vérification et validation du champ textarea.
    checkMessage(elt) {

        if (elt.value.trim() === '' || elt.value.trim() == null) {

            elt.parentElement.setAttribute('data-error-visible', 'true');
            elt.style.border = '2px solid #e54858';

            return false;

        }

        elt.parentElement.setAttribute('data-error-visible', 'false');
        elt.style.border = 'solid #279e7a 0.19rem';

        return true;

    }
}
