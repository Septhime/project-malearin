function checklogin() {
	var email = document.getElementById("email").value; // Récupération du contenu dans le premier champs nommé "Mot de passe"
	var mdp = document.getElementById("mdp").value; // Récupération du contenu dans le deuxième champs nommé "Confirmation"
	
	if(email == "test@gmail.com" && mdp == "azerty123") { // Condition: Si l'email et le mot de passe correspondent à ceux enregistrés alors...
		alert("Bonjour test,\nMalheureusement, notre service est actuellement en maintenance pour durée indéterminée.\nRéessayer Ultérieurement"); //Envoie d'un message d'erreur
		alert("Vous avez été déconnecté"); //Envoie d'un message informatif
	}
	else if(email == "jeanmichel@orange.fr" && mdp == "jaimelaraclette76") { //Sinon si l'email et le mot de passe correspondent à ceux enregistrés alors...
		alert("Bonjour Jean-Michel,\nMalheureusement, notre service est actuellement en maintenance pour durée indéterminée.\nRéessayer Ultérieurement"); //Envoie d'un message d'erreur
		alert("Vous avez été déconnecté"); //Envoie d'un message informatif
	}
	else if(email == "lamouchette@free.fr" && mdp == "rebdsetx482") { //Sinon si l'email et le mot de passe correspondent à ceux enregistrés alors...
		alert("Bonjour La Mouchette,\nMalheureusement, notre service est actuellement en maintenance pour durée indéterminée.\nRéessayer Ultérieurement"); //Envoie d'un message d'erreur
		alert("Vous avez été déconnecté");//Envoie d'un message informatif
	}
	else { //Sinon...
		if(email != "" || mdp != "") { //Si le champ email ou le champ du mot de passe contient un élément alors...
			alert("L'adresse email ou/et le mot de passe entré est/sont incorrect.\nVeuillez réessayer"); //Envoie d'un messgae d'erreur
		}
		else { //Sinon...
			document.form.submit(); // Envoi du formulaire
		}
	}
}