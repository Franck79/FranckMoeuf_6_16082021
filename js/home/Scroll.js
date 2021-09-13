export default class Scroll {

    // On récupère la position de l'utilisateur afin de le ramener en haut de la page.
    // EventListener sur le scroll.
    scrollButton() {

        window.addEventListener("scroll", () => {

            let button = document.getElementById("main-photographers-link");
            // On stock le scroll vertical.
            let y = window.scrollY;

            // Si on scroll vers le bas le bouton apparait.
            if (y >= 130) {

                button.style.display = "block";

            } else {

                button.style.display = "none";
                
            }
        });
    }
}
