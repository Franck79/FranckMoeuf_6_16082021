
export default class VideoMedia {
    // Création d'un élément video avec controls, src et role.
    createHTML(element) {

        let eltVideo = document.createElement('video');
        eltVideo.setAttribute("autoplay", "autoplay");
        eltVideo.setAttribute("controls", "hidden");
        eltVideo.setAttribute('src', element.video);
        eltVideo.setAttribute('role', 'button');
        eltVideo.className = 'photograph-media';

        return eltVideo;

    }
}
