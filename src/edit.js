// Edite un fichier

if (params.length >= 1) {
	
	// On prépare le chamin d'accès
	if (params[0].substr(0, 1) == "/") {
		params[0] = params[0].substr(1);
	}
	
	// On récupère le fichier
	content = jssInternalReadFile(params[0]);
	
	// Si il n'existe pas, on le crée dans cache
	if (content === 0) {
		jssFileCacheIndex[jssFileCacheIndex.length] = params[0];
		jssFileCacheContent[jssFileCacheContent.length] = "";
		content = "";
	}
	
	// On crée la zone d'édition
	editField = document.createElement("textarea");
	editField.style.zIndex = "5";
	editField.style.width = "100%";
	editField.style.height = (jssDimensions[1] - 30) + "px";
	editField.style.margin = "0px";
	editField.style.padding = "0px";
	editField.style.position = "fixed";
	editField.style.left = "0px";
	editField.style.top = "30px";
	editField.style.border = "0px";
	editField.style.resize = "none";
	editField.style.fontFamily = jssFont;
	editField.style.color = jssFgColor;
	editField.style.backgroundColor = jssBgColor;
	editField.value = content;
	jssDiv.appendChild(editField);
	editField.focus();
	editInfos = document.createElement("pre");
	editInfos.style.zIndex = "5";
	editInfos.style.width = "100%";
	editInfos.style.height = "30px";
	editInfos.style.margin = "0px";
	editInfos.style.padding = "0px";
	editInfos.style.position = "fixed";
	editInfos.style.left = "0px";
	editInfos.style.top = "0px";
	editInfos.style.fontFamily = jssFont;
	editInfos.style.color = jssFgDarkColor;
	editInfos.style.backgroundColor = jssBgColor;
	if (jssLangCode == "Fr") {
		editInfos.innerHTML = "/" + jssHTMLEscape(params[0]) + " <a href=\"#\" onclick=\"javascript:jssEditEndOfEditing('" + jssHTMLEscape(params[0]) + "')\">Fin de l'édition</a>";
	} else if (jssLangCode == "En") {
		editInfos.innerHTML = "/" + jssHTMLEscape(params[0]) + " <a href=\"#\" onclick=\"javascript:jssEditEndOfEditing('" + jssHTMLEscape(params[0]) + "')\">End of editing</a>";
	}
	jssDiv.appendChild(editInfos);
	
	// Cherche toutes les 100ms si la fenêtre est redimensionnée
	editInterval = setInterval(function () {
		if (editField.style.height != (jssDimensions[1] - 30) + "px") {
			editField.style.height = (jssDimensions[1] - 30) + "px";
		}
	}, 100);
	
}