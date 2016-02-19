/*
 * JavaScript Shell
 *
 * Fichier de chargement de la console
 * et d'affichage du message de bienvenu
 *
 */

// On s'assure que le système n'est pas déjà lancé
if (!jssRunning) {

	// Message d'accueil
	switch (jssLangCode) {
		case "Fr":
			jssOut("<span style=\"color:" + jssFgDarkColor + ";\">Bienvenu sur JS-SHELL " + jssVersion + "\n(C) Copyright 2015 Théophile Walter, tout droits réservés.\n\nTapez <a href=\"#help\">help</a> pour obtenir la liste des commandes disponnibles.\nTapez <a href=\"#jsShell use\">jsShell use</a> pour en savoir plus sur le fonctionnement de JS-SHELL</span>\n");
			break;
		case "En":
			jssOut("<span style=\"color:#" + jssFgDarkColor + ";\">Welcome to JS-SHELL " + jssVersion + "\n(C) Copyright 2015 Théophile Walter, all rights reserved.\n\nType <a href=\"#help\">help</a> to get command list.</span>\nType <a href=\"#jsShell use\">jsShell use</a> to learn more about how JS-SHELL works\n");
			break;
	}

	// Cherche une fonction à lancer par défaut
	var identifier = window.location.href.split("#");
	if (identifier.length > 1) {
		jssInternalEval(decodeURIComponent(identifier[1]));
		currentIdentifier = decodeURIComponent(identifier[1]);
	}

	// Cherche toutes les 100ms si l'URL a changée et si la fenêtre est redimensionnée
	setInterval(function () {
		
		// Si la console est en pause, on ne fait rien
		if (jssInPause) {
			return;
		}
		
		var identifier = window.location.href.split("#");
		if (identifier.length > 1) {
			if (decodeURIComponent(identifier[1]) != currentIdentifier) {
				jssInternalEval(decodeURIComponent(identifier[1]));
				currentIdentifier = decodeURIComponent(identifier[1]);
			}
		}
		if (window.innerHeight != jssDimensions[1]) {
			jssOutField.style.height = (window.innerHeight - jssInputHeight) + "px";
			jssOutField.scrollTop = jssOutField.scrollHeight;
			jssDimensions = [window.innerWidth, window.innerHeight];
		}
	}, 100);
	
	// On enregistre que le système est lancé
	jssRunning = true;
	
} else {
	switch (jssLangCode) {
		case "Fr":
			jssOut("<span style=\"color:red;\">Erreur: jssRunning doit être à \"false\" pour initialiser le système !</span>\n");
			break;
		case "En":
			jssOut("<span style=\"color:red;\">Error: jssRunning must be at false to initialize the system !</span>\n");
			break;
	}
}