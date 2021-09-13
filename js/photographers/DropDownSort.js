import GalleryMedia from '../Medias/GalleryMedia.js';

export default class DropDownMenu {
    // Événements ouverture et fermeture du menu déroulant
    dropDown(data) {

        let arrowOpen = document.getElementsByClassName('sort-btn');
        let arrowClose = document.getElementsByClassName('arrow-up-close');
        let hiddenSort = document.getElementsByClassName('hidden-sort');

        if (arrowOpen) {

            arrowOpen[0].addEventListener('click', () => {

                hiddenSort[0].style.display = 'block';

            });

            this.sortMedias(data);

        }
        if (arrowClose) {

            arrowClose[0].addEventListener('click', () => {

                hiddenSort[0].style.display = "none";

            });
        }
    }

    // Tri des médias par Popularité, Date et Titre.
    sortMedias(data) {

        let mediaArraySort = [];
        let media = data.media;
        let buttonSort = document.querySelector('.sort-btn');
        let hiddenSort = document.getElementsByClassName('hidden-sort');
        let sortButton = Array.from(document.getElementsByClassName('sort'));
        console.log(sortButton);
        sortButton.forEach((btn, index) => btn.addEventListener('click', () => {

            hiddenSort[0].style.display = "none";

            if (index == 0) {

                buttonSort.innerHTML = `Popularité`;
                //Tri par popularité
                mediaArraySort = media.sort((a, b) => {

                    return b.likes - a.likes

                })

            } else if (index == 1) {

                buttonSort.innerHTML = `Date`;
                // Tri par date
                mediaArraySort = media.sort((a, b) => {

                    return new Date(a.date).valueOf() - new Date(b.date).valueOf();

                })

            } else if (index == 2) {

                buttonSort.innerHTML = `Titre`;
                // Tri par Titre
                mediaArraySort = media.sort((a, b) => { 
                    
                    if (a.photoName.toLowerCase() < b.photoName.toLowerCase()) {

                        return -1;

                    } else if (a.photoName.toLowerCase() > b.photoName.toLowerCase()) {

                        return 1;

                    }
                })
            }
            this.displaySortMedia(mediaArraySort);
        }));
    }

    displaySortMedia(mediaArraySort) {
        // Affichage des médias d'un photographe avec le tri.
        document.getElementById("photograph-works").innerHTML = "";
        new GalleryMedia().builder(mediaArraySort);
    }
}