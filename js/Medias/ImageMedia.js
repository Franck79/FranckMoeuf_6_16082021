
export default class ImageMedia {
    // On génére les éléments img avec src et alt.
    createHTML(element) {

        let eltImage = document.createElement('img');
        eltImage.setAttribute('src', element.image);
        eltImage.setAttribute('alt', element.alt);
        eltImage.setAttribute('role', 'button');
        eltImage.className = 'photograph-media';

        return eltImage;
        
    }
}
