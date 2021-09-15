export default class Filter {
    // Ajout classe actived aux éléments <li>
    // qui sont cliqués.
    toggleActivatedClass(event, self) {
        // On récupère le nom de la classe 'actived'.
        let classValue = event.target.classList.value;
        // On récupère les tags des photographes.
        let tagsArticle = document.querySelectorAll('.articlePh');
        //console.log(tagsArticle);
        // Si l'élément cherché n'est pas présent dans le tableau,
        // la méthode renverra -1, dans ce cas précis on ajoute la classe 'actived",
        // Si on a déjà cliqué dessus on supprime la classe 'acitved'.
        if (classValue.indexOf('actived') === -1) {
                
            event.target.classList.add('actived')

        } else {

            event.target.classList.remove('actived')
        }

            self.sortDomArticle(tagsArticle);

    }
    // Filtres des tags
    filterTags() {
        // On stock les éléments html de la liste <ul>
        let filtres = document.querySelector('ul');

        const self = this;
        // EventListener OnCLick sur les <li>
        filtres.addEventListener('click', (event) => this.toggleActivatedClass(event, self));

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
    // On récupère la valeur dans le paramètre tagSelected de l'url.
    // et on lui ajoute la classe actived.
    getDefaultSelectedFilter() {
        // On récupère la valeur contenu dans la paramètre d'url.
        let tagSelected = window.location.search.split('tagSelected=')[1];
        // Récupérer les tags qui match le tagSelected
        let tagsArticle = document.querySelectorAll(`.${tagSelected}`);
        // console.log(tagsArticle);
        tagsArticle.forEach((tag) => {
            // console.log(tag);
            tag.classList.add('actived');

        })

        this.sortDomArticle(tagsArticle);

    }

    // On compare les filtres afin de checker 
    // si ils ont la meme valeurs que les class 'article'.    
    compareAllFilters(article) {
        // On stock les filtres selectionnés.
        let filters = this.getActiveFilters();
        // On récupère les tags des photographes. 
        let tagsValue = article.classList.value;
        // On place les valeurs de classValue dans une tableau.
        let tagsArray = tagsValue.split(' ');
        // On filtre les tags des photographes présents dans le tableau des tags selectionnés.
        let intersection = filters.filter(tag => tagsArray.includes(tag));
        // On retourne la longueur du tableau des filtres selectionnés 
        // égal à la longueur des filtres des photographes.
        return filters.length == intersection.length;

    }

    // Articles affichés ou masqués.
    sortDomArticle(tagsArticle) {

        tagsArticle.forEach((article) => {
            // Si la methode trouve le ou les meme tags alors on affiche le photographe.
            if (this.compareAllFilters(article)) {

                article.style.display = 'block';

            } else {

                article.style.display = 'none';

            }

        });
    }
}