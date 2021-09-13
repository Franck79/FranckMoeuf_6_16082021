// Fonction Filter Tags
export default class Filter {

    toggleActivatedClass(event, self) {
        let classValue = event.target.classList.value;
        let articles = document.querySelectorAll('.articlePh');

            if (-1 === classValue.indexOf('actived')) {
                event.target.classList.add('actived')
            } else {
                event.target.classList.remove('actived')
            }

            self.sortDomArticle(articles);
    }
    // Filtres des tags
    filterTags() {
        let filtres = document.querySelector('ul');
        const self = this;
        // EventListener OnCLick sur les <li>
        filtres.addEventListener('click', (event) => this.toggleActivatedClass(event, self));
    }

    // On récupère les filtres avec la classe 'Actived' et on les push dans l'array 'filterSelected'.    
    getActiveFilters() {
        let currentFilters = document.querySelectorAll('ul li.actived');
        let filterSelected = [];

        currentFilters.forEach(function (currentFilter) {
            filterSelected.push(currentFilter.getAttribute("data-filter"));
        });

        return filterSelected;
    }

    getDefaultSelectedFilter() {
        const tagSelected = window.location.search.split('tagSelected=')[1];
        // Récupérer les tags qui match notre tagSelected
        const tags = document.querySelectorAll(`.${tagSelected}`);
        tags.forEach((tag) => {
            tag.classList.add('actived');
        })
    }

    // On compare les filtres afin de checker si ils ont la meme valeurs que les class 'article'.    
    ownAllFilters(article) {
        let filters = this.getActiveFilters();
        let classValue = article.classList.value;
        let classes = classValue.split(' ');
        let intersection = filters.filter(
            x => classes.includes(x)
        );

        return filters.length == intersection.length;
    }

    // Articles affichés ou masqués.
    sortDomArticle(articles) {
        articles.forEach((article) => {
            if (this.ownAllFilters(article)) {
                article.style.display = 'block';
            } else {
                article.style.display = 'none';
            }
        });
    }
}