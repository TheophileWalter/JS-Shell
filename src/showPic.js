// Affiche une image
if (params.length >= 1) {
	if (params.length == 3) {
		jssOut("<img src=\"" + jssHTMLEscape(params[0]) + "\" style=\"max-width:" + jssHTMLEscape(params[1]) + "px; max-height:" + jssHTMLEscape(params[2]) + "px;\" alt=\"\" />\n");
	} else if (params.length == 2) {
		jssOut("<img src=\"" + jssHTMLEscape(params[0]) + "\" style=\"max-height:" + jssHTMLEscape(params[1]) + "px;\" alt=\"\" />\n");
	} else {
		jssOut("<img src=\"" + jssHTMLEscape(params[0]) + "\" alt=\"\" />\n");
	}
}