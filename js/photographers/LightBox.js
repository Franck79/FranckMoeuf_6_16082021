export default class LightBox {

    constructor() {

        this.currentIndex = 0;

    }

    // initialisation de la lightbox en cliquant sur un média, 
    // On appelle les fonctions permettant de naviguer dans la lightbox.
    init(currentMedia, currentMediaName) {
        
        let getMedias = Array.from(document.getElementsByClassName('photograph-media'));
        
        getMedias.forEach((mediaWorks, index) => mediaWorks.addEventListener("click", () => {

            let lightBoxMedia = document.getElementById('works-lightbox-media');

            let lightBoxName = document.getElementById('works-lightbox-name');

            let src = currentMedia[index];

            let nameSrc = currentMediaName[index];

            this.currentIndex = index;
            
            document.getElementById('works-lightbox').style.display = 'block';
            lightBoxMedia.innerHTML = `${src}`;
            lightBoxName.innerHTML = `${nameSrc}`;

        }))
        
        this.previous(document.querySelector('.left-arrow-lightbox'), currentMedia, currentMediaName);

        this.next(document.querySelector('.right-arrow-lightbox'), currentMedia, currentMediaName);
        this.close();

        this.keyboard(currentMedia, currentMediaName);

        return this

    }

    // On retourne le média précédent.
    previous(elt, media, name) {

        elt.addEventListener('click', () => {

            this.currentIndex -= 1;

            let lightBoxMedia = document.getElementById('works-lightbox-media');

            let lightBoxName = document.getElementById('works-lightbox-name');

            if (this.currentIndex < 0) {

                this.currentIndex = media.length - 1;

                this.currentIndex = name.length - 1;

            }

            let src = media[this.currentIndex];
            let nameSrc = name[this.currentIndex];

            lightBoxMedia.innerHTML = `${src}`;
            lightBoxName.innerHTML = `${nameSrc}`;
        })
    }

    // On passe au média suivant.
    next(elt, media, name) {

        elt.addEventListener('click', () => {

            this.currentIndex += 1;
            let lightBoxMedia = document.getElementById('works-lightbox-media');
            let lightBoxName = document.getElementById('works-lightbox-name');

            if (this.currentIndex > name.length - 1) {

                this.currentIndex = 0;

            }

            let src = media[this.currentIndex];
            let nameSrc = name[this.currentIndex];

            lightBoxMedia.innerHTML = `${src}`;
            lightBoxName.innerHTML = `${nameSrc}`;

        })
    }

    close() {

        document.querySelector('.close-lightbox-icon').addEventListener('click', () => {

            let lightbox = document.getElementById('works-lightbox');

            lightbox.style.display = 'none';

        })
    }

    keyboard(currentMedia, currentMediaName) {

        document.addEventListener('keydown', (key) => {
            
            let lightBoxMedia = document.getElementById('works-lightbox-media');
            let lightBoxName = document.getElementById('works-lightbox-name');

            if (key.code == "Space") {
                
                let lightBox = document.getElementById('works-lightbox');
                lightBox.style.display = 'block';

                let src = currentMedia[this.currentIndex];
                let nameSrc = currentMediaName[this.currentIndex];

                lightBoxMedia.innerHTML = `${src}`;
                lightBoxName.innerHTML = `${nameSrc}`;

            }
            // Touche Escape pour fermer.
            if (key.code == "Escape") {

                let lightBox = document.getElementById('works-lightbox');
                lightBox.style.display = 'none';

            }

            // Flèche droite pour passer au média suivant.
            else if (key.code == "ArrowRight") {

                this.currentIndex += 1;

                if (this.currentIndex > currentMediaName.length - 1) {

                    this.currentIndex = 0;

                }

                let src = currentMedia[this.currentIndex];
                let nameSrc = currentMediaName[this.currentIndex];

                lightBoxMedia.innerHTML = `${src}`;
                lightBoxName.innerHTML = `${nameSrc}`;

            }

            // Flèche gauche pour passer au média précédent.
            else if (key.code == "ArrowLeft") {

                this.currentIndex -= 1;

                if (this.currentIndex < 0) {

                    this.currentIndex = currentMedia.length - 1;
                    this.currentIndex = currentMediaName.length - 1;

                }

                let src = currentMedia[this.currentIndex];
                let nameSrc = currentMediaName[this.currentIndex];

                lightBoxMedia.innerHTML = `${src}`;
                lightBoxName.innerHTML = `${nameSrc}`;
            }
            
        });
    }
}
