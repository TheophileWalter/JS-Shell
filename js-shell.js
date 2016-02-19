/*
 * JS-SHELL
 *
 * Version ... 1.0
 * Auteur .... Théophile WALTER
 * Date ...... 16/10/2015
 *
 * Utilisation : http://walter.tw/js-shell/#jsShell%20use
 *
 */


// Définition des paramètres par défaut
var jssVersion = "1.0";
var jssBgColor = "#1E2426";
var jssInputBgColor = "#3A4649";
var jssFgColor = "#F8F8F8";
var jssFgDarkColor = "#A0A0A0";
var jssId = "js-shell";
var jssInputHeight = 30;
var jssFont = '"Courier New"';
var jssScriptsPath = "src/";
var jssCmdMarker = "$";
var jssCmdMarkerColor = "#00AA00";

// Définition des informations
var jssDiv = document.body;
var jssSetDisplay = true;
var currentIdentifier;
var jssDimensions = [window.innerWidth, window.innerHeight];
var jssFileCacheIndex = []; // Contient les nom des fichiers mis en cache
var jssFileCacheContent = []; // Contient le contenu des fichiers en cache
var jssRunning = false;
var jssStack = []; // Pile pour les fonctions "push" "pop" et "exch"
var jssStackSize = 0;
var jssInPause = false;
var jssSavedDisplay = false;

/*
 * Mettre à "false" pour interdire l'execution de JavaScript via les commandes "javascript" et "jss"
 */
function jssExecutionAuthorized() { return true; }

// Variable de langue
var jssLangCode = "Fr";
var jssFr = ["Erreur : Le script demandé est introuvable !", "Erreur : L'exécution de Javascript est désactivée sur cette session", "<span style=\"color:red;\">Erreur : Vous ne pouvez pas lancer <i>/sys/load.js</i> alors que le système est lancé !</span>", "<span style=\"color:red;\">Erreur: jssStack est vide !</span>"];
var jssEn = ["Error : The script requested was not found !", "Error: Javascript execution is disabled for this session", "<span style=\"color:red;\">Error: You can't run <i>/sys/load.js</i> while the system is running !</span>", "<span style=\"color:red;\">Error: jssStack is empty !</span>"];
switch (jssLangCode) {
	case "Fr":
		jssLang = jssFr;
		break;
	case "En":
		jssLang = jssEn;
}

// Préparation de la console
jssDiv.style.color = jssFgColor;
jssDiv.style.backgroundColor = jssBgColor;
jssDiv.style.margin = "0px";
jssDiv.style.padding = "0px";

// Champ de sortie
var jssOutField = document.createElement("pre");
jssOutField.style.margin = "0px";
jssOutField.style.padding = "0px";
jssOutField.style.position = "fixed";
jssOutField.style.left = "0px";
jssOutField.style.top = "0x";
jssOutField.style.width = "100%";
jssOutField.style.height = (window.innerHeight - jssInputHeight) + "px";
jssOutField.style.fontFamily = jssFont;
jssOutField.style.color = jssFgColor;
jssOutField.style.backgroundColor = jssBgColor;
jssOutField.style.overflow = "auto";
jssOutField.style.whiteSpace = "pre-wrap"; // Retour à la ligne automatique
jssDiv.appendChild(jssOutField);

// Champ d'entrée
var jssInForm = document.createElement("form"); // Formulaire
jssInForm.action = "#"
jssDiv.appendChild(jssInForm);
var jssInField = document.createElement("input"); // Entrée
jssInField.style.margin = "0px";
jssInField.style.padding = "0px";
jssInField.style.position = "fixed";
jssInField.style.left = "0px";
jssInField.style.bottom = "0px";
jssInField.style.border = "none";
jssInField.style.width = "100%";
jssInField.style.height = jssInputHeight + "px";
jssInField.style.fontFamily = jssFont;
jssInField.style.color = jssFgColor;
jssInField.style.backgroundColor = jssInputBgColor;
jssInForm.appendChild(jssInField);
jssInField.focus();

// Lors de l'envoie d'une commande, on appelle la fonction d'interprétation
jssInForm.onsubmit = function () {
	jssInternalEval(jssInField.value);
	jssInField.value = "";
	return false; // Ne recharge pas la page
};

// Lancement du programme d'initialisation
jssInternalExec("/sys/load.js", []);

/*
 * FONCTIONS À USAGE EXTERNE
 *
 */

// Affiche du contenu dans la sortie JSS
function jssOut ( text) {
	jssInternalAddAfter(jssOutField, text);
}

// Sécurise du contenu pour un affichage en HTML
function jssHTMLEscape( text) {
	return text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}


/*
 * FONCTIONS À USAGE INTERNE
 *
 */

// Récupère le nom de commande et les paramètres depuis une chaîne de caractères
function jssInternalEval ( cmd, noUpdate = false) {
	
	// Si la console est en pause, on ne fait rien
	if (jssInPause) {
		return;
	}
	
	// On met à jour l'URL
	if (!noUpdate) {
		currentIdentifier = cmd;
		window.location.href = "#" + encodeURI(currentIdentifier).replace("#", "%23");
	}
	
	if (cmd == "") {
		return;
	}
	
	// Affiche la commande dans la sortie (en sautant une ligne si il le faut)
	if (jssSetDisplay) {
		jssOut("\n<span style=\"color:" + jssCmdMarkerColor + "\">" + jssCmdMarker + " <i><a href=\"#" + encodeURI(cmd).replace("#", "%23") + "\" style=\"color:" + jssCmdMarkerColor + "\">" + jssHTMLEscape(cmd) + "</a></i></span>\n");
	}
	
	// Récupère la commande
	cmdSrc = cmd.split(" ")[0];
	
	// On regarde si l'utilisateur n'essaye pas de lancer le script de démmarage
	if (cmdSrc.toLowerCase() == "/sys/load.js" || cmdSrc.toLowerCase() == "/sys/load") {
		jssOut(jssLang[2] + "\n");
		return;
	}
	
	// Récupère les paramètres
	paramsSplitted = cmd.substr(cmdSrc.length + 1).split(" ");
	var k = 0;
	var params = [];
	for (i = 0; i < paramsSplitted.length; i++) { // Regroupe les chaînes entre les guillemets
		if (paramsSplitted[i].substr(0, 1) != "\"") {
			params[k] = paramsSplitted[i];
			k++;
		} else {
			params[k] = paramsSplitted[i].substr(1);
			if (params[k].substr(params[k].length - 1) == "\"") {
				params[k] = params[k].substr(0, params[k].length - 1);
			} else {
				i++;
				while (paramsSplitted[i].indexOf("\"") == -1) {
					params[k] += " " + paramsSplitted[i];
					i++;
				}
				params[k] += " " + paramsSplitted[i].substr(0, paramsSplitted[i].length - 1);
			}
			k++
		}
	}
	if (params.length == 1 && params[0] == "") {
		params = [];
	}
	
	// On cherche l'appel d'un commande interne
	switch (cmdSrc) {
		case "javascript": // Execution de JavaScript
		case "js":
			// On execute le code en paramètres
			if (jssExecutionAuthorized()) {
				if (params.length >= 1) {
					var code = "";
					for (i = 0; i < params.length - 1; i++) {
						code += params[i] + " ";
					}
					code += params[params.length - 1];
					eval(code);
				}
			} else {
				jssOut(jssLang[1] + "\n");
			}
			break;
		case "setDisplay": // Gestion de l'affichage
			if (params.length >= 1) {
				if (params[0] == "on") {
					jssSetDisplay = true;
				} else if (params[0] == "off") {
					jssSetDisplay = false;
				}
			}
			break;
		case "lang": // Changement de la langue
			if (params.length >= 1) {
				switch (params[0]) {
					case "En":
						jssLangCode = "En";
						jssLang = jssEn;
						break;
					case "Fr":
						jssLangCode = "Fr";
						jssLang = jssFr;
						break;
					default:
						jssLangCode = "Fr";
						jssLang = jssFr;
						break;
				}
			}
			break;
		case "reset": // Redémarrage de la console (avec conservation des paramètres)
			currentIdentifier = "";
			window.location.href = "#";
			jssRunning = false;
			jssInternalExec("/src/clear.js", []);
			jssInternalExec("/sys/load.js", []);
			break;
		case "restart": // Redémarrage de la console
			currentIdentifier = "";
			window.location.href = "#";
			location.reload();
			break;
		case "pop": // La fonction pop est codée ici car l'appeller en tant que fichier provoquait des erreurs
			if (jssStackSize > 0) {
				jssOut(jssStack[jssStackSize - 1] + "\n");
				jssStackSize--;
			} else {
				jssOut(jssLang[3] + "\n");
			}
			break;
		default:
			// On appelle la fonction d'appelle du script
			jssInternalExec(cmdSrc, params);
			break;
	}
	
	return true;
	
}

// Execute une commande en fonction des paramètres
// src : nom de la commande
// params : tableau de chaîne de caractères contenant les paramètres
function jssInternalExec ( src, params) {
	
	// Si la console est en pause, on ne fait rien
	if (jssInPause) {
		return;
	}
	
	// Si le chemin n'est pas donné depuis la racine
	if (src.substr(0, 1) != "/") {
		// On ajoute le préfix du dossier des scripts
		src = jssScriptsPath + src;
	} else {
		// Sinon on supprime le slash de départ
		src = src.substr(1);
	}
	
	// On regarde si le ".js" a été donné
	if (src.substr(src.length - 3) != ".js") {
		// On l'ajoute
		src += ".js";
	}
	
	// Lecture du script
	script = jssInternalReadFile(src);
	
	// Cherche une erreur
	if (script === 0) {
		
		// On affiche une erreur
		jssOut(jssLang[0] + "\n");
		
		// On quitte
		return false;
		
	}
	
	// On lance le script
	eval(script);
	
	return true;
	
}

 // Lecture d'un fichier local
function jssInternalReadFile ( file) {
	
	// On regarde si le fichier est en chache
	for (i = 0; i < jssFileCacheIndex.length; i++) {
		if (jssFileCacheIndex[i] == file) {
			return jssFileCacheContent[i];
		}
	}
	
	// Sinon, on le lit et on le met en cache
	var content;
	var xmlHttp = new XMLHttpRequest();
	xmlHttp.open( "GET", file, false );
	xmlHttp.send( null );
	if (xmlHttp.status !== 200) {
		return 0;
	}
	jssFileCacheIndex[jssFileCacheIndex.length] = file;
	jssFileCacheContent[jssFileCacheContent.length] = xmlHttp.responseText;
	return xmlHttp.responseText;
}

// Insert du texte à la fin d'un élément
function jssInternalAddAfter( el, text) {
    var content = el.innerHTML;
    el.innerHTML += text;
    // On scroll à la fin
    el.scrollTop = el.scrollHeight;
}

// Fonction de fin de l'édition (via la commande "edit")
var editField;
var editInfos;
var editInterval;
function jssEditEndOfEditing(filename) {
	// On enregistre le fichier dans le cache
	for (i = 0; i < jssFileCacheIndex.length; i++) {
		if (jssFileCacheIndex[i] == filename) {
			jssFileCacheContent[i] = editField.value;
			break;
		}
	}
	// On remet la console comme avant l'édition
	clearInterval(editInterval);
	jssDiv.removeChild(editField);
	jssDiv.removeChild(editInfos);
	jssInField.focus();
}

// Fonction de sortie de pause
function jssInternalEndPause() {
	jssInPause = false;
}

