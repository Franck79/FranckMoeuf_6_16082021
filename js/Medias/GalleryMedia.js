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

                let articlePhWork = document.createElement("article");

                let mediaHTML = media.renderMedia(element);
                // console.log(sectionPhWorks);
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
                articlePhWork.innerHTML = workTemplate;
                sectionPhWorks.appendChild(articlePhWork);
                articlePhWork.classList.add("photograph-work-elt");
                this.totalLike += parseInt(element.likes);
                currentMedia.push(mediaHTML.outerHTML);
                currentMediaName.push(element.photoName);
                (new Lightbox())
                .init(currentMedia, currentMediaName)
            }
        })
        return this;
    }
}
