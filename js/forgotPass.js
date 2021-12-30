function checkEmail() {
	var email = document.getElementById("email").value; // Récupération du contenu dans le  champs nommé "email"
 
	if(email == "test@gmail.com") {  // Condition: Si l'email renseigné correspond à celui enregistré alors...
		alert("Votre mot de passe est: azerty123"); //Envoi d'un message contenant le mot de passe
		document.form.submit(); // Envoi du formulaire
	}
	else if(email == "jeanmichel@orange.fr") { // Condition: Sinon si l'email renseigné correspond à celui enregistré alors...
		alert("Votre mot de passe est: jaimelaraclette76"); //Envoi d'un message contenant le mot de passe
		document.form.submit(); // Envoi du formulaire
	}
	else if(email == "lamouchette@free.fr") { // Condition: Sinon si l'email renseigné correspond à celui enregistré alors...
		alert("Votre mot de passe est: rebdsetx482"); //Envoi d'un message contenant le mot de passe
		document.form.submit(); // Envoi du formulaire
	}
	else { //Sinon...
		if(email != "") { // Condition: Si le champ "email" contient quelque chose alors...
		alert("Cette adresse e-mail n'est pas enregistrée auprès de notre service.\nVeuillez réessayer."); //Envoi d'un message d'erreur
		}
		else { //Sinon...
		document.form.submit(); // Envoi du formulaire
		}
	}
}