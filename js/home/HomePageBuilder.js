import Filter from './FilterTags.js';
import Scroll from './Scroll.js';
const filterInstance = new Filter();

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
                `<a href="#">
                    <li data-filter="${tag}" id="nav-${tag}">#${tag}</li>
                </a>`).join(" ")}
            </ul> 
            `
            // On ajoute les articles au parent qui est la section photographers.
            sectionPhotographers.appendChild(articlePhotographers);
            // On ecrit le template dans les balises article.
            articlePhotographers.innerHTML = templatePhotographer;

            // Ajouter les EventListener sur les boutons de filtres.
            // Récupérer tous les articles ph.

            // Pour chaque article ajouter un eventListener sur chaque bouton filtre.
            const articles = document.querySelectorAll('.articlePh');
                // console.log(articles);
            articles.forEach(article => {
                //console.log(article);
                const buttons = article.querySelectorAll(".filter button")

                buttons.forEach(button => { 

                    button.addEventListener('click', (event) => filterInstance.toggleActivatedClass(event, filterInstance));

                })
            }) 



        })
        filterInstance.getDefaultSelectedFilter();
        filterInstance.filterTags();
        new Scroll().scrollButton();
    }
}
