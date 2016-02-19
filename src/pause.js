// Met la console en pause

if (params.length >= 1) {
	// On affiche le message si il le faut
	var noDisplay = false;
	if (params.length >= 2) {
		if (params[1] == "-d") {
			noDisplay = true;
		}
	}
	if (!noDisplay) {
		if (jssLangCode == "Fr") {
			jssOut("JSS en pause pour " + parseInt(params[0]) + "ms....\n");
		} else if (jssLangCode == "En") {
			jssOut("JSS paused for " + parseInt(params[0]) + "ms....\n");
		}
	}
	
	// Si un temps est donné, on met en pause pendant ce temps
	setTimeout(function () {
		jssInPause = false;
	}, parseInt(params[0]));
	jssInPause = true;
} else {
	// Sinon, on affiche un message pour sortir de la pause
	if (jssLangCode == "Fr") {
		jssOut("JSS en pause, <a href=\"#\" onclick=\"javascript:jssInternalEndPause();\">fin de la pause</a>\n");
	} else if (jssLangCode == "En") {
		jssOut("JSS paused, <a href=\"#\" onclick=\"javascript:jssInternalEndPause();\">end of pause</a>\n");
	}
	jssInPause = true;
}