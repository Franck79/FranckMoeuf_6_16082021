import SwitchMedia from './SwitchMedia.js';
import Lightbox from '../photographers/LightBox.js';

export default class GalleryMedia {

    constructor() {

        this.totalLike = 0;

    }
    
    // Affichage de la galerie avec les différents médias et la lightbox.
    // Affichage des médias triés dans DropDownSort
    builder(dataMedia) {
        // On récupère l'Id du photographe
        const id = window.location.search.split('id=')[1];
    
        let media = new SwitchMedia();
        let currentMedia = [];
        let currentMediaName = [];

        dataMedia.forEach(element => {

            if (id == element.photographerId) {

                let sectionPhWorks = document.getElementById('photograph-works');
                // Création balises article qui contiendront chacune un média.
                let articlePhWork = document.createElement("article");
                // Variable qui contient la méthode pournle switch image ou video.
                let mediaHTML = media.renderMedia(element);
                // Création du templating a insérer dans les balises articles
                let workTemplate = `
                <a href='#' title=${element.photoName}>
                ${mediaHTML.outerHTML}
                </a>
                <div class="photograph-work-elt-text">
                    <h2 class="photograph-work-title">${element.photoName}</h2>
                    <span class="photograph-work-price">${element.price} €</span>
                    <div class='photograph-elt-like'>
                    <span class="photograph-work-like">
                        <a class="like-counter">${element.likes}</a>
                    </span>
                    <i class="far fa-heart heart-btn" aria-label='likes' role="button" data-value="${element.likes}"></i>
                    </div>
                </div>
                `
                // Insert du template dans les balises articles
                articlePhWork.innerHTML = workTemplate;
                // Balises articles attachées au parent, section 'photograph-works'.
                sectionPhWorks.appendChild(articlePhWork);
                // On ajoute la classe aux balises article des médias.
                articlePhWork.classList.add("photograph-work-elt");
                // Incrémentation pour le total des likes d'un photographe.
                this.totalLike += parseInt(element.likes);
                // On ajoute nos éléments html dans un tableau.
                currentMedia.push(mediaHTML.outerHTML);
                // On récupre le nom des médias dans un tableau.
                currentMediaName.push(element.photoName);
                // On passe en arguments les médias et leur nom
                // à la méthode init de la classe Lightbox.
                (new Lightbox()).init(currentMedia, currentMediaName)

            }
        })

        return this;
    }
}
