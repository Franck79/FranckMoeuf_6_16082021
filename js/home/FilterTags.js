export default class Filter {
    // Fonction pour récupérer les filtres tags sur les photographes.
    toggleActivatedClassPhButton() {

        // Ajouter les EventListener sur les boutons de filtres.
        // Récupérer tous les articles ph.
        const articles = document.querySelectorAll(".articlePh");
        
        articles.forEach(article => {
            // On récupère les tags des photographes 
            const buttons = article.querySelectorAll(".filter .photograph-button")
            // On construit un array contenant les boutons dans la navigation.
            const navButtons = Array.from(document.querySelectorAll(".nav-button"))
            // On filtre les tags qui ont la classe activated.
            const navButtonsActivated = navButtons.filter((navButton) => 
                navButton.classList.contains("activated"))
            
            buttons.forEach(button => { 
                
                const filterValue = button.getAttribute("data-filter")
            
                if (navButtonsActivated.some((navButton) => 
                    navButton.getAttribute("data-filter") === filterValue)) {

                    button.classList.add("activated")

                } else {
                   
                    button.classList.remove("activated")

                }
            })
        })

    }
    // Ajout classe activated aux éléments <li> des tags dans la navigation                                                                                           
    // qui sont cliqués.
    toggleActivatedClass(event, self) {
        // On récupère le nom de la classe 'activated'.
        const navButton = document.getElementById(`nav-${event.target.getAttribute("data-filter")}`);
        
        let classValue = navButton.classList.value;
        // On récupère les tags des photographes.
        let tagsArticle = document.querySelectorAll('.articlePh');
        // Si l'élément cherché n'est pas présent dans le tableau,
        // la méthode renverra -1, dans ce cas précis on ajoute la classe 'activated",
        // Si on a déjà cliqué dessus on supprime la classe 'acitved'.
        if (classValue.indexOf('activated') === -1) {
            
            navButton.classList.add('activated')
        
        } else {

            navButton.classList.remove('activated')
            
        }
        
        self.toggleActivatedClassPhButton();
        self.sortDomArticle(tagsArticle);
        

    }
    // Filtres des tags qui ont été cliqués.
    filterTags() {
        // On stock les éléments html de la liste <ul> du nav
        const filtres = document.querySelector('ul');

        const self = this;
        // EventListener OnCLick sur les <button>
        filtres.addEventListener('click', (event) => this.toggleActivatedClass(event, self));

    }

    // On récupère les filtres avec la classe 'Activated'
    // et on les push dans l'array 'filterSelected'.    
    getActiveFilters() {

        let currentFilters = document.querySelectorAll('ul .nav-button.activated');
        
        let filterSelected = [];
        // Pour chaque li activated, on va stocker la valeur de data-filter
        // dans un tableau.
        currentFilters.forEach(function (currentFilter) {

            filterSelected.push(currentFilter.getAttribute("data-filter"));

        });

        return filterSelected;

    }
    // On récupère la valeur d'un tag selectionné dans le paramètre tagSelected de l'url,
    // depuis le profil d'un photographe.
    // et on lui ajoute la classe activated.
    getDefaultSelectedFilter() {
        // On récupère la valeur contenu dans la paramètre d'url.
        let tagSelected = window.location.search.split('tagSelected=')[1];

        if (!tagSelected) {
            return
        }
        // Récupérer les tags qui match le tagSelected
        let tagsArticle = document.querySelectorAll(`.articlePh`);
        // 1. Récupérer le li nav tag.
        const elementSelected = document.getElementById(`nav-${tagSelected}`);
        // 2. Ajouter la classe activated a l'élément trouvé.
        elementSelected.classList.add('activated');

        this.sortDomArticle(tagsArticle);

    }

    // On compare les filtres afin de checker 
    // si ils ont la meme valeurs que les class 'article'.    
    compareAllFilters(article) {
        // On stock les filtres selectionnés.
        let filters = this.getActiveFilters();
        //console.log({filters});
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