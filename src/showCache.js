// Affiche la liste des fichiers en cache
var size = 0;
for (i = 0; i < jssFileCacheIndex.length; i++) {
	size += jssFileCacheContent[i].length;
	jssOut("<a href=\"#type " + encodeURI("/" + jssFileCacheIndex[i]) + "\">/" + jssHTMLEscape(jssFileCacheIndex[i]) + "</a> (" + jssFileCacheContent[i].length + ")\n");
}
if (jssLangCode == "Fr") {
	jssOut("\nTaille totale : " + size + " octet" + (size == 0 ? "" : "s") + "\n");
} else if (jssLangCode == "En") {
	jssOut("\nFull size : " + size + " byte" + (size == 0 ? "" : "s") + "\n");
}