// Affiche du texte � l'�cran
if (params.length >= 1) {
	for (i = 0; i < params.length - 1; i++) {
		jssOut(jssHTMLEscape(params[i]) + " ");
	}
	jssOut(jssHTMLEscape(params[params.length - 1]) + "\n");
}