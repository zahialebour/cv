/***** Fonction pour assurer le lien entre scroll et barre de progression *****/
window.addEventListener("scroll", function() { //ajoute une fonction efectuée lorsque l'utilisateur scroll sur la page

	deplacement =(window.scrollY/(document.body.offsetHeight - window.innerHeight))*100; // Calcul du déplacement 

	document.getElementById('progress_bar').value = deplacement; // Modifie la valeur de la barre de progression pour qu'elle corresponde au déplacement du scroll
});


/***** Fonction pour assurer le lien entre la barre de progression et le scroll ******/
function myScroll() { // Définition de la fonction de scroll
    var progress = document.getElementById('progress_bar').value; // Valeur de la barre de progression
   
    value = ((document.body.offsetHeight- window.innerHeight) * progress)/100;   //Calcul de la valeur de déplacement à efectuer lors du scroll
	
    window.scroll(0, value) // Déplacement de la page de 0 px latéralement et 'value' px horizontalement
}
