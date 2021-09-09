// Données Json
import ApiFishEye from './provider/ApiFishEye.js';

// Home Page
import HomePageBuilder from './home/HomePageBuilder.js';

// Page détail des Photographes
import PhotographerProfil from './photographers/PhotographerProfil.js';
import DropDownMenu from './photographers/DropDownSort.js';
import MediaBuilder from './photographers/MediaBuilder.js';

(function appDispatch() {
    new ApiFishEye().getDataFishEye().then((data) => {
        if (window.location.pathname.includes("/photographers.html")) {
            // Header du profil d'un photographe
            new PhotographerProfil().displayPhotographerProfil(data);

            // DropDonw sort list menu
            new DropDownMenu().dropDown(data);

            // Gallerie des photos et likes
            new MediaBuilder().photographersMedias(data);
            return
        }
        // Home page (Photographes, Scroll et Filtres)
        new HomePageBuilder().displayPhotographers(data);
    }).catch(() => {
        console.error('Failed to load ApiFishEye');
    })
})();
