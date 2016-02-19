// Lance un fichier JSS (suite de commandes JSS)

// Récupère le nom du fichier
if (params.length >= 1) {
	var fileName = params[0];
	if (fileName.substr(0, 1) == "/") {
		fileName = fileName.substr(1);
	}
	
	// Lecture du fichier
	var script = jssInternalReadFile(fileName);
	if (script === 0) {
		if (jssLangCode == "Fr") {
			jssOut("Erreur : Le fichier JSS est introuvable !\n");
		} else if (jssLangCode == "En") {
			jssOut("Error : Unable to find the JSS file !\n");
		}
	} else {
		
		// Préparation du fichier
		var lines = script.split("\n");
		
		// On regarde si la version est compatible
		if (lines[0] != "cm JSS 1.0") {
			if (jssLangCode == "Fr") {
				jssOut("Erreur : Le fichier n'est pas dans un format compatible (<b>JSS 1.0</b> attendu) !\n");
			} else if (jssLangCode == "En") {
				jssOut("Error : The file is not in a supported format (<b>JSS 1.0</b> required) !\n");
			}
		} else {
			
			// On execute le fichier
			for (var i = 1; i < lines.length; i++) {
				
				// On prépare la ligne
				for (var p = 1; p < params.length; p++) {
					if ((typeof params[p]) == "string") {
						lines[i] = lines[i].replace("param" + (p - 1), '"' + params[p].replace('"', "\\\"") + '"');
					} else {
						lines[i] = lines[i].replace("param" + (p - 1), params[p]);
					}
				}
				
				// On execute la ligne
				jssInternalEval(lines[i], true);
				
			}
			
		}
		
	}
	
}