
import ImageMedia from './ImageMedia.js';
import VideoMedia from './VideoMedia.js';

export default class SwitchMedia {
    // On vérifie si l'élément sélectionné est une image ou une vidéo.
    renderMedia(element) {

        let media = null;

        if (element.hasOwnProperty('image')) {

            media = new ImageMedia();

        } else if (element.hasOwnProperty('video')) {

            media = new VideoMedia();

        }
        
        return media.createHTML(element);
    }
}
