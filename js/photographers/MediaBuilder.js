import GalleryMedia from '../Medias/GalleryMedia.js';
import Likes from './Likes.js';

export default class MediaBuilder {
    // On appelle la GalleryMedia
    // pour créer la section média avec la fonction 'Likes'.
    photographersMedias(data) {

        let media = data.media;
        
        let gallery = new GalleryMedia().builder(media);
        // on passe en arguments le total des likes et les data média du photographe.
        this.boxLikesAndPrice(gallery.totalLike, data.photographers);

        new Likes();

    }

    // On créé un bloc contenant le nombre total de likes et le prix du photographe.
    boxLikesAndPrice(totalLike, photographers) {
        // Id d'un photographe
        const id = window.location.search.split('id=')[1];

        photographers.forEach(element => {
            // Si l'id du photograhe est égal a l'id du média.
            // on écrit le total des likes et son prix dans le bloc box.
            if (id == element.id) {

                let box = document.getElementById('box');

                let boxTemplate = `
                <span id="total-likes">${totalLike}</span>
                <i class="fas fa-heart" aria-label='likes'></i>
                <span>${element.price} €/ jour</span>
                `
                box.innerHTML = boxTemplate;
            }
        })
    }
}
