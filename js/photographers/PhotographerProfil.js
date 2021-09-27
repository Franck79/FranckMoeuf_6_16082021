import Modal from './Modal.js';
import Form from './Form.js';

export default class photographerProfil {
    // Vérification sur quelle page se trouve l'utilisateur, 
    // si la position correspond à l'identifiant du photographe, 
    // on créé la section Profil du photographe.
    displayPhotographerProfil(data) {

        let photographersData = data.photographers;

        const id = window.location.search.split('id=')[1];
        // On récupère les infos d'un photographe grace à l'id dans l'url avec filter.
        const photographers = !id ? photographersData : photographersData.filter(photographer => photographer.id == id);
        
        const sectionPhotographerProfil = document.getElementById('photograph-profil-header');
        // templating des infos du photographe
        const templatePhotographerProfil = `
            <article aria-label="photographer Profil" class="photograph-profil">
                <div class='photograph-infos'>
                    <h2>${photographers[0].name}</h2>
                    <p class="photograph-city">${photographers[0].city}, ${photographers[0].country}</p>
                    <p class="photograph-tagline">${photographers[0].tagline}</p>
                    <p >${photographers[0].tags.map(tag => 
                        `<a class="photograph-tags" href="index.html?tagSelected=${tag}">
                            #${tag}
                        </a>`).join(" ")}</p>
                </div>
                <button type="button" aria-haspopup="dialog" aria-controls="form-dialog" 
                    id="photograph-contact" title='Contact Me'>Contactez-moi</button>
                <a href='#' title='${photographers[0].alt}'><img src="${photographers[0].portrait}" alt="${photographers[0].alt}"></a>
            </article>
            `
        // On écrit le template dans la balise html 'photograph-profil-header'.
        sectionPhotographerProfil.innerHTML = templatePhotographerProfil;

        new Modal().modal(photographersData);

        new Form().fields();
        
    }
}
