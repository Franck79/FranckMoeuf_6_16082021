import GalleryMedia from '../Medias/GalleryMedia.js';

export default class DropDownMenu {
    // Événements ouverture et fermeture du menu déroulant
    dropDown(data) {

        let arrowOpen = document.getElementsByClassName('sort-btn');
        
        let arrowClose = document.getElementsByClassName('arrow-up-close');
        
        let hiddenSort = document.getElementsByClassName('hidden-sort');
        // Si on clique sur la fleche d'ouverture
        // la liste cachée apparait.
        if (arrowOpen) {

            arrowOpen[0].addEventListener('click', () => {

                hiddenSort[0].style.display = 'block';

            });

            this.sortMedias(data);

        }
        // On fait apparaitre la liste avec le clavier.
        arrowOpen[0].addEventListener('keydown', (key) => {

            if(key.code == "Enter") {

                hiddenSort[0].style.display = 'block';

            }
            
        });
         // Focus à l'ouverture du Modal.
         document.addEventListener("focus", function(event) {

            const focusForm = document.getElementsByClassName("hidden-sort");
        
            if (!focusForm.contains(event.target)) {

                event.stopPropagation();

                focusForm.focus();

            }
        
        }, true);
        // Si on clique sur la flèche de fermeture
        // le bloc cachée disparait.
        if (arrowClose) {

            arrowClose[0].addEventListener('click', () => {

                hiddenSort[0].style.display = "none";

            });
            // On cache la liste au clavier.
            arrowClose[0].addEventListener('keydown', (key) => {
                
                if (key.code == "Escpape") {

                    hiddenSort[0].style.display = "none";

                }

                

            });
        }
    }

    // Tri des médias par Popularité, Date et Titre.
    sortMedias(data) {

        let mediaArraySort = [];

        let media = data.media;
        // Bouton
        let buttonSort = document.querySelector('.sort-btn');
        // bloc ul
        let hiddenSort = document.getElementsByClassName('hidden-sort');
        // éléments li
        let sortButton = Array.from(document.getElementsByClassName('sort'));
        // Pour chaque élément li EventListener sur le click.
        sortButton.forEach((btn, index) => btn.addEventListener('click', () => {
            // ul caché par défaut.
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

                    return new Date(b.date).valueOf() - new Date(a.date).valueOf();

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
    
        document.getElementById("photograph-works").innerHTML = "";
        // On met a jour la gallerie des médias grace au tableau mediaArraySort.
        new GalleryMedia().builder(mediaArraySort);
    }
}