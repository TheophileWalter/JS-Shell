// Restaure l'affichage précédemment sauvegardé
if (jssSavedDisplay === false) {
	if (jssLangCode == "Fr") {
		jssOut("Erreur : Aucun affichage enregistré !\n");
	} else if (jssLangCode == "En") {
		jssOut("Error: No display saved !\n");
	}
} else {
	jssOutField.innerHTML = jssSavedDisplay;
	jssOutField.scrollTop = jssOutField.scrollHeight;
}