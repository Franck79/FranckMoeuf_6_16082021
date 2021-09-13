import Filter from './FilterTags.js';
import Scroll from './Scroll.js';

// Affichage de tous les photographes
export default class HomePageBuilder {
    // Section des phpotographes, 
    // on appelle la fonction "filtertags" 
    // et le bouton "Passer au contenu".
    displayPhotographers(data) {

        let photographers = data.photographers;
        
        photographers.map(photographe => {

            let sectionPhotographers = document.getElementById('photographers');
            
            let articlePhotographers = document.createElement('article');
            // On stock les tags d'un photographe dans le className
            // et on ajoute la nom de classe articlePh à la fin de la liste de tags.
            articlePhotographers.className = photographe.tags.join(' ') + ' articlePh';

            // Création du templating pour un article contenant
            // les infos et photo d'un photographe.
            let templatePhotographer = `
            <a href="photographers.html?id=${photographe.id}" title="${photographe.name}">
                <img src="${photographe.portrait}" alt="${photographe.alt}">
                <h2 class="name">${photographe.name}</h2>
            </a>
            <p class="location">${photographe.city}, ${photographe.country}</p>
            <p class="tagline">${photographe.tagline}</p>
            <p class="price">${photographe.price}€/jour</p>
            <ul class="filter">${photographe.tags.map(tag =>
                `<li data-filter="${tag}">#${tag}</li>`).join(" ")}</ul> 
            `
            // On ajoute les articles au parent qui est la section photographers.
            sectionPhotographers.appendChild(articlePhotographers);
            // On ecrit le template dans les balises article.
            articlePhotographers.innerHTML = templatePhotographer;
        })

        new Filter().filterTags();
        new Scroll().scrollButton();
    }
}
