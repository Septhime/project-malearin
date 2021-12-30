function checkmdp() {
	var mdp1 = document.getElementById("mdp1").value; // Récupération du contenu dans le premier champs nommé "Mot de passe"
	var mdp2 = document.getElementById("mdp2").value; // Récupération du contenu dans le deuxième champs nommé "Confirmation"
	
	if(mdp1 == mdp2 && mdp1 != "") { // Condition: Si le contenu du champs "Mot de passe" contient la même valeur que "confirmation" alors...
		if(mdp1.length >= 8) {
			alert("Malheuresement, notre service n'accepte plus d'inscription. Réessayez plus tard."); //Envoie d'un message
			document.form.submit(); // Envoi du formulaire
		}
		else {
			document.form.submit(); // Envoi du formulaire
		}
	}
	else { //Sinon...
		if(mdp1 != "") { // Si le champs "Mot de passe" est vide alors...
			alert("Les mots de passe ne correspondent pas. Veuillez réessayer."); //Envoi d'un message d'erreur
		}
		else { //Sinon...
			document.form.submit(); // Envoi du formulaire
		}
	}
}