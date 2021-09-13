export default class Likes {
    // Ajout ou suppression d'un like en cliquant sur l'icône like. 
    constructor() {

        let media = document.getElementById('photograph-works');
        // EventListener sur l'icone 'heart'.
        media.addEventListener('click', (e) => {
            // Si la classe n'est pas défini,
            // on initialise la valeur a vide.
            let classListTarget = typeof e.target.classList === 'undefined' ? [] : e.target.classList.value.split(' ');
            // retourne true si l'index n'est pas -1.
            let hasClassBtn = classListTarget.indexOf('heart-btn') != -1;
            // Si hasClassBtn est a true.
            if (hasClassBtn) {
                
                let totalLikes = parseInt(document.getElementById('total-likes').innerHTML);
                // Compteur de Likes d'un média.
                let counterLike = e.target.parentNode.firstElementChild.firstElementChild;
                
                let likeValue = parseInt(counterLike.innerHTML);
                // Si l'index est différent de -1, alors on retourne true.
                let isLiked = classListTarget.indexOf('isLiked') != -1;
                // On incrémente le total de likes dans la box html si isLiked est a true.
                // Sinon on décrémente le total.
                document.getElementById('total-likes').innerHTML = isLiked ? --totalLikes : ++totalLikes;
                // On incrémente le total de Likes d'un média si isLiked est a true
                // Sinon on décrémente.
                counterLike.innerHTML = isLiked ? --likeValue : ++likeValue;
                // Si isLIked est a true on modifie la classe de l'icone heart
                // Si il est égal a -1 on ajoute la classe 'isLiked', l'icone est pleine.
                // Sinon on l'enlève et l'icone est vide.
                if (isLiked) {

                    e.target.classList.remove('isLiked');
                
                    e.target.classList.replace('fas', 'far');

                } else {

                    e.target.classList.add('isLiked');
                    
                    e.target.classList.replace('far', 'fas');

                }
            }
        })
    }
}
