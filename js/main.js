// Données Json
import ApiFishEye from './provider/ApiFishEye.js';

// Home Page
import HomePageBuilder from './home/HomePageBuilder.js';

// Page détail des photographes
import photographerProfil from './photographers/photographerProfil.js';
import DropDownMenu from './photographers/DropDownSort.js';
import MediaBuilder from './photographers/MediaBuilder.js';

(function appDispatch() {

    // On récupère les datas de ApiFishEye
    new ApiFishEye().getDataFishEye().then((data) => {

        // Si on est sur la page d'un photographe
        if (window.location.pathname.includes("/photographers.html")) {

            // Header du profil d'un photographe
            new photographerProfil().displayPhotographerProfil(data);

            // DropDonw sort list menu
            new DropDownMenu().dropDown(data);

            // Gallerie des photos et likes
            new MediaBuilder().photographersMedias(data);
            return
        }
        // On passe les données dans Home page (photograph-es, Scroll et Filtres)
        new HomePageBuilder().displayPhotographers(data);
    }).catch(() => {
        console.error('Failed to load ApiFishEye');
    })
})();
