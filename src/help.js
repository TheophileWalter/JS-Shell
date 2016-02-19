/*
 * JavaScript Shell
 *
 * Script d'affichage de l'aide
 *
 */

if (params.length < 1) {
	jssOut(jssInternalReadFile("src/help." + jssLangCode + ".txt"));
} else {
	switch (params[0]) {
		case "test":
			if (jssLangCode == "Fr") {
				jssOut("Affiche un message de test\n\ntest [\"Message\" [couleur]]\ncouleur au format HTML\n");
			} else if (jssLangCode == "En") {
				jssOut("Displays a test message\n\ntest [\"Message\" [color]]\ncolor in HTML format\n");
			}
			break;
		case "help":
			if (jssLangCode == "Fr") {
				jssOut("Affiche la liste des commandes\n\nhelp [commande]\nEntrez le nom d'une commande pour obtenir l'aide détaillée\n");
			} else if (jssLangCode == "En") {
				jssOut("Displays a list of commands\n\nhelp [commande]\nEnter the name of a command to get detailed help\n");
			}
			break;
		case "javascript":
		case "js":
			if (jssLangCode == "Fr") {
				jssOut("Exécute un code Javascript\n\n" + params[0] + " \"code\"\n");
			} else if (jssLangCode == "En") {
				jssOut("Execute un code Javascript\n\n" + params[0] + " \"code\"\n");
			}
			break;
		case "echo":
			if (jssLangCode == "Fr") {
				jssOut("Affiche du texte à l'écran\n\necho \"texte\"\n");
			} else if (jssLangCode == "En") {
				jssOut("Displays text on the screen\n\necho \"text\"\n");
			}
			break;
		case "setDisplay":
			if (jssLangCode == "Fr") {
				jssOut("Paramètre l'affichage des commandes dans la sortie\n\nsetDisplay on|off\n");
			} else if (jssLangCode == "En") {
				jssOut("Set the controls display in the output\n\nsetDisplay on|off\n");
			}
			break;
		case "lang":
			if (jssLangCode == "Fr") {
				jssOut("Change la langue\n\nlang En|Fr\n");
			} else if (jssLangCode == "En") {
				jssOut("Change language\n\nlang En|Fr\n");
			}
			break;
		case "clear":
			if (jssLangCode == "Fr") {
				jssOut("Vide la console\n\nclear\n");
			} else if (jssLangCode == "En") {
				jssOut("Empty console\n\nclear\n");
			}
			break;
		case "reset":
			if (jssLangCode == "Fr") {
				jssOut("Redémarre la console (en conservant les modifications)\n\nreset\n");
			} else if (jssLangCode == "En") {
				jssOut("Restart the console (keeping the changes)\n\nreset\n");
			}
			break;
		case "restart":
			if (jssLangCode == "Fr") {
				jssOut("Redémarre la console (en oubliant les modifications)\n\nrestart\nAttention : Cela aura pour effet de supprimer la totalité des modifications apportées à la console (y compris sur les fichiers) !\n            Aucune confirmation ne vous sera demandée !\n");
			} else if (jssLangCode == "En") {
				jssOut("Restart the console (forgetting the changes)\n\nrestart\nWarning: This will have the effect of removing all changes to the console (including files) !\n         No confirmation will be requested!\n");
			}
			break;
		case "langReset":
			if (jssLangCode == "Fr") {
				jssOut("Change la langue puis redémarre la console\n\nlangReset En|Fr\n");
			} else if (jssLangCode == "En") {
				jssOut("Change language and restart the console\n\nlangReset En|Fr\n");
			}
			break;
		case "jsShell":
		case "jss":
			if (jssLangCode == "Fr") {
				jssOut("Affiche des informations sur JS-SHELL\n\n" + params[0] + " [option [largeur [hauteur]]]\noption : use      = Aide sur l'utilisation de JS-SHELL dans son site\n         download = Télécharger les sources de JS-SHELL\n         embed    = Obtenir le code d'embarquement HTML pour JS-SHELL (possibilité de préciser la taille, par défaut 700x500px)\n");
			} else if (jssLangCode == "En") {
				jssOut("Displays information about JS-SHELL\n\n" + params[0] + " [option [width [height]]]\noption : use      = Help on using JS-SHELL in your website\n         download = Download the sources of JS-SHELL\n         embed    = Get the HTML code for embed JS-SHELL (allowed to specify the size, default is 700x500px)\n");
			}
			break;
		case "openURI":
			if (jssLangCode == "Fr") {
				jssOut("Ouvre une URI dans un nouvel onglet\n\nopenURI \"URI\"\n");
			} else if (jssLangCode == "En") {
				jssOut("Opens a URI in a new tab\n\nopenURI \"URI\"\n");
			}
			break;
		case "date":
			if (jssLangCode == "Fr") {
				jssOut("Affiche la date\n\ndate\nAu format JJ/MM/AAAA\n");
			} else if (jssLangCode == "En") {
				jssOut("Displays date\n\ndate\nAt DD/MM/YYYY format\n");
			}
			break;
		case "time":
			if (jssLangCode == "Fr") {
				jssOut("Affiche l'heure\n\ntime\nAu format HH:MM:SS\n");
			} else if (jssLangCode == "En") {
				jssOut("Displays the time\n\ntime\nAt HH:MM:SS format\n");
			}
			break;
		case "showPic":
			if (jssLangCode == "Fr") {
				jssOut("Affiche une image\n\nshowPic URI [hauteur [largeur]]\n");
			} else if (jssLangCode == "En") {
				jssOut("Displays an image\n\nshowPic URI [height [width]]\n");
			}
			break;
		case "type":
			if (jssLangCode == "Fr") {
				jssOut("Affiche un fichier local\n\ntype \"fichier\" [-n]\nSi -n est donné en 2nd paramètre alors les numéros de ligne ne seront pas affichés.\n");
			} else if (jssLangCode == "En") {
				jssOut("View a local file\n\ntype \"file\" [-n]\nIf -n is given as 2nd parameter, the line numbers will not be displayed.\n");
			}
			break;
		case "showCache":
			if (jssLangCode == "Fr") {
				jssOut("Affiche la liste des fichiers en cache\n\nshowCache\n");
			} else if (jssLangCode == "En") {
				jssOut("Displays a list of cached files\n\nshowCache\n");
			}
			break;
		case "clearCache":
			if (jssLangCode == "Fr") {
				jssOut("Supprime les fichiers en cache et les modifications apportées aux fichiers\n\n/sys/clearCache\nAttention : Cela aura pour effet de supprimer la totalité des modifications apportées par la commande <a href=\"#help edit\">edit</a> !\n            Cette commande se trouve dans le répertoire système, tapez bien <i>/sys/clearCache</i>.\n            Aucune confirmation ne vous sera demandée !\n");
			} else if (jssLangCode == "En") {
				jssOut("Deletes cached files and changes to files\n\n/sys/clearCache\nWarning: This will have the effect of removing all changes made by the <a href=\"#help edit\">edit</a> command !\n         This command is in the system directory, type exactly <i>/sys/clearCache</i>.\n         No confirmation will be requested !\n");
			}
			break;
		case "edit":
			if (jssLangCode == "Fr") {
				jssOut("Edite un fichier\n\nedit \"fichier\"\nAttention : Les modification ne sont actives que pour la session actuelle ! Le fait de recharger la page annulera ces modifications. L'utilisation de <a href=\"#help reset\">reset</a> n'affecte pas les modifications.\n");
			} else if (jssLangCode == "En") {
				jssOut("Edits a file\n\nedit \"file\"\nWarning: The changes are only active for the current session! Reload the page will cancel the changes. Using <a href=\"#help reset\">reset</a> does not affect the changes.\n");
			}
			break;
		case "add":
			if (jssLangCode == "Fr") {
				jssOut("Effectue une addition\n\nadd n1 n2 [-c]\nSi -c est donné en 3ème paramètre alors seul le résultat de l'opération sera affiché.\n");
			} else if (jssLangCode == "En") {
				jssOut("Performs an addition\n\nadd n1 n2 [-c]\nIf -c is given as third parameter only the result of the operation will be displayed.\n");
			}
			break;
		case "sub":
			if (jssLangCode == "Fr") {
				jssOut("Effectue une soustraction\n\nsub n1 n2 [-c]\nSi -c est donné en 3ème paramètre alors seul le résultat de l'opération sera affiché.\n");
			} else if (jssLangCode == "En") {
				jssOut("Performs a subtraction\n\nsub n1 n2 [-c]\nIf -c is given as third parameter only the result of the operation will be displayed.\n");
			}
			break;
		case "mul":
			if (jssLangCode == "Fr") {
				jssOut("Effectue une multiplication\n\nmul n1 n2 [-c]\nSi -c est donné en 3ème paramètre alors seul le résultat de l'opération sera affiché.\n");
			} else if (jssLangCode == "En") {
				jssOut("Performs a multiplication\n\nmul n1 n2 [-c]\nIf -c is given as third parameter only the result of the operation will be displayed.\n");
			}
			break;
		case "div":
			if (jssLangCode == "Fr") {
				jssOut("Effectue une division\n\ndiv n1 n2 [-c]\nSi -c est donné en 3ème paramètre alors seul le résultat de l'opération sera affiché.\n");
			} else if (jssLangCode == "En") {
				jssOut("Performs a division\n\ndiv n1 n2 [-c]\nIf -c is given as third parameter only the result of the operation will be displayed.\n");
			}
			break;
		case "alert":
			if (jssLangCode == "Fr") {
				jssOut("Affiche une alerte\n\nalert \"text\"\n");
			} else if (jssLangCode == "En") {
				jssOut("Displays an alert\n\nalert \"text\"\n");
			}
			break;
		case "if":
			if (jssLangCode == "Fr") {
				jssOut("Evalue une expression\n\nif \"expression\"\nRenvoir \"true\" ou \"false\"\n");
			} else if (jssLangCode == "En") {
				jssOut("Evaluates an expression\n\nif \"expression\"\nReturn \"true\" or \"false\"\n");
			}
			break;
		case "top":
			if (jssLangCode == "Fr") {
				jssOut("Retourne en haut de la console\n\ntop\n");
			} else if (jssLangCode == "En") {
				jssOut("Return to the top of the console\n\ntop\n");
			}
			break;
		case "end":
			if (jssLangCode == "Fr") {
				jssOut("Retourne en bas de la console\n\nend\n");
			} else if (jssLangCode == "En") {
				jssOut("Return to the down of the console\n\nend\n");
			}
			break;
		case "setOutFgColor":
			if (jssLangCode == "Fr") {
				jssOut("Change la couleur du texte de l'interface de sortie\n\nsetOutFgColor [couleur]\ncouleur au format HTML\nIgnorer \"couleur\" pour rétablir la couleur par défaut.\n");
			} else if (jssLangCode == "En") {
				jssOut("Change the text color of the output interface\n\nsetOutFgColor [color]\ncolor at HTML format\nIgnore \"color\" to reset default color.\n");
			}
			break;
		case "setOutBgColor":
			if (jssLangCode == "Fr") {
				jssOut("Change la couleur de fond de l'interface de sortie\n\nsetOutBgColor [couleur]\ncouleur au format HTML\nIgnorer \"couleur\" pour rétablir la couleur par défaut.\n");
			} else if (jssLangCode == "En") {
				jssOut("Change the background color of the output interface\n\nsetOutBgColor [color]\ncolor at HTML format\nIgnore \"color\" to reset default color.\n");
			}
			break;
		case "setInFgColor":
			if (jssLangCode == "Fr") {
				jssOut("Change la couleur du texte de l'interface d'entrée\n\nsetInFgColor [couleur]\ncouleur au format HTML\nIgnorer \"couleur\" pour rétablir la couleur par défaut.\n");
			} else if (jssLangCode == "En") {
				jssOut("Change the text color of the input interface\n\nsetInFgColor [color]\ncolor at HTML format\nIgnore \"color\" to reset default color.\n");
			}
			break;
		case "setInBgColor":
			if (jssLangCode == "Fr") {
				jssOut("Change la couleur de fond de l'interface d'entrée\n\nsetInBgColor [couleur]\ncouleur au format HTML\nIgnorer \"couleur\" pour rétablir la couleur par défaut.\n");
			} else if (jssLangCode == "En") {
				jssOut("Change the background color of the input interface\n\nsetInBgColor [color]\ncolor at HTML format\nIgnore \"color\" to reset default color.\n");
			}
			break;
		case "push":
			if (jssLangCode == "Fr") {
				jssOut("Ajoute une valeur en haut de la pile\n\npush v1 [v2 [v3 [...]]]\nPour insérer plusieurs valeurs, donnez-en une par paramètre, les valeurs seront ajoutées dans l'ordre.\n");
			} else if (jssLangCode == "En") {
				jssOut("Adds a value on top of the stack\n\npush v1 [v2 [v3 [...]]]\nTo insert multiple values, give one per parameter, the values will be added in the order.\n");
			}
			break;
		case "pop":
			if (jssLangCode == "Fr") {
				jssOut("Sort la valeur en haut de la pile\n\npop\nLa valeur est affichée dans la sortie et est supprimée de la pile\n");
			} else if (jssLangCode == "En") {
				jssOut("Extract the value on top of the stack\n\npop\nThe value is displayed in the output and is removed from the stack\n");
			}
			break;
		case "exch":
			if (jssLangCode == "Fr") {
				jssOut("Echange les deux valeurs en haut de la pile\n\nexch\nLa pile doit avoir au moins 2 valeurs\n");
			} else if (jssLangCode == "En") {
				jssOut("Swap the two values at the top of the stack\n\nexch\nThe stack should be at least 2 values\n");
			}
			break;
		case "showStack":
			if (jssLangCode == "Fr") {
				jssOut("Affiche la pile\n\nshowStack\n");
			} else if (jssLangCode == "En") {
				jssOut("Displays the stack\n\nshowStack\n");
			}
			break;
		case "clearStack":
			if (jssLangCode == "Fr") {
				jssOut("Vide la pile\n\nclearStack\n");
			} else if (jssLangCode == "En") {
				jssOut("Empty the stack\n\nclearStack\n");
			}
			break;
		case "cm":
			if (jssLangCode == "Fr") {
				jssOut("Ne fait rien (utilisable pour les commentaires)\n\ncm commentaire\n");
			} else if (jssLangCode == "En") {
				jssOut("Do nothing (used for comments)\n\ncm comment\n");
			}
			break;
		case "run":
			if (jssLangCode == "Fr") {
				jssOut("Lance un fichier JSS (suite de commandes JSS)\n\nrun \"fichier\"\nUn fichier JSS doit commencer dès la première ligne par \"cm JSS 1.0\" !\n");
			} else if (jssLangCode == "En") {
				jssOut("Launch a JSS file (sequence of JSS commands)\n\nrun \"file\"\nA JSS file must start from the first line by \"cm JSS 1.0\" !\n");
			}
			break;
		case "pause":
			if (jssLangCode == "Fr") {
				jssOut("Met la console en pause\n\npause [temps [-d]]\nSi aucun paramètre n'est envoyé, alors la console attends que l'utilisateur arrête la pause.\nSi un temps est donné (en millisecondes), il est possible de spécifier le paramètre -d pour rendre l'exécution de la commande silencieuse.\n");
			} else if (jssLangCode == "En") {
				jssOut("Pauses the console\n\npause [time [-d]]\nIf no parameter is sent, then the console wait for the user stops the pause.\nIf a time is given (in milliseconds), you can specify the -d parameter to make a silent execution.\n");
			}
			break;
		case "saveDisplay":
			if (jssLangCode == "Fr") {
				jssOut("Enregistre l'affichage actuel\n\nsaveDisplay\n");
			} else if (jssLangCode == "En") {
				jssOut("Saves the current view\n\nsaveDisplay\n");
			}
			break;
		case "restDisplay":
			if (jssLangCode == "Fr") {
				jssOut("Restaure l'affichage précédemment sauvegardé\n\nrestDisplay\n");
			} else if (jssLangCode == "En") {
				jssOut("Restore the previously saved view\n\nrestDisplay\n");
			}
			break;
			
			
		default:
			if (jssLangCode == "Fr") {
				jssOut("Erreur, commande introuvable\n");
			} else if (jssLangCode == "En") {
				jssOut("Error, command not found\n");
			}
			break;
	}
}