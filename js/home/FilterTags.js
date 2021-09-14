// Fonction Filter Tags
export default class Filter {
    // Filtres des tags
    filterTags() {

        let filtres = document.querySelector('ul');
        // On récupère les tags des photographes.
        let articles = document.querySelectorAll('.articlePh');
        // EventListener sur le clic des <li>
        filtres.addEventListener('click', event => {
            // On récupère le nom de la classe 'actived'.
            let classValue = event.target.classList.value;
            // Si l'élément cherché n'est pas présent dans le tableau,
            // la méthode renverra -1, dans ce cas précis on ajoute l'élément.
            if (classValue.indexOf('actived') === -1) {
                
                event.target.classList.add('actived')

            } else {

                event.target.classList.remove('actived')
            }
            // On passe en arguments les tags des photographes
            this.sortDomArticle(articles);
        });
    }

    // On récupère les filtres avec la classe 'Actived'
    // et on les push dans l'array 'filterSelected'.    
    getActiveFilters() {

        let currentFilters = document.querySelectorAll('ul li.actived');
        
        let filterSelected = [];
        // Pour chaque li actived, on va stocker la valeur de data-filter
        // dans un tableau.
        currentFilters.forEach(function (currentFilter) {

            filterSelected.push(currentFilter.getAttribute("data-filter"));

        });
        
        return filterSelected;
    }
    // On compare les filtres afin de checker si ils ont la meme valeurs que les class 'article'.    
    ownAllFilters(article) {
        // On stock les filtres selection
        let filters = this.getActiveFilters();
        // On récupère les tags des photographes
        let tagsValue = article.classList.value;
        // On place les valeurs de classValue dans une tableau.
        let tagsArray = tagsValue.split(' ');
        // On récupère les tags des photographes présents dans le tableau des tags selectionnés.
        let matchTagsArray = filters.filter(tag => tagsArray.includes(tag));
        // On retourne la longueur du tableau des filtres selectionnés 
        // égal à la longueur des filtres des photographes.
        // console.log(tagsArray);
        // console.log(matchTagsArray);
        return filters.length == matchTagsArray.length;
    }

    // Articles affichés ou masqués.
    sortDomArticle(articles) {
        
        articles.forEach((article) => {
            // Si la methode trouve le ou les meme tags alors on affiche le photographe.
            if (this.ownAllFilters(article)) {
                // console.log("visible");
                article.style.display = 'block';

            } else {
                // console.log("non visible");
                article.style.display = 'none';

            }
        });
    }
}