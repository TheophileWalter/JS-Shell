// Affiche un fichier local

var displayLines = true;
if (params.length >= 2) {
	if (params[1] == "-n") {
		displayLines = false;
	}
}
if (params.length >= 1) {
	if (params[0].substr(0, 1) == "/") {
		params[0] = params[0].substr(1);
	}
	var content = jssInternalReadFile(params[0]);
	if (content === 0) {
		if (jssLangCode == "Fr") {
			jssOut("Erreur : Le fichier spécifié est introuvable !\n");
		} else if (jssLangCode == "En") {
			jssOut("Error : File not found!\n");
		}
	} else {
		var contentSplitted = content.split("\n");
		for (i = 0; i < contentSplitted.length; i++) {
			jssOut((displayLines ? "<span style=\"color:#808080;\">" + (i + 1) + "</span> " : "") + jssHTMLEscape(contentSplitted[i]) + "\n");
		}
	}
}