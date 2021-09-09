export default class Scroll {
    // On récupère la position de l'utilisateur afin de le ramener en haut de la page.
    // EventListener sur le scroll.
    scrollButton() {
        window.addEventListener("scroll", () => {
            let button = document.getElementById("main-photographers-link");
            let y = window.scrollY;

            if (y >= 130) {
                button.style.display = "block";
            } else {
                button.style.display = "none";
            }
        });
    }
}
