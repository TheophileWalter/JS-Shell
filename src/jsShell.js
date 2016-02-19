// Affiche des informations sur JS-SHELL
if (params.length < 1) {
	jssInternalExec("/src/type.js", ["/src/jss.txt", "-n"]);
	if (jssLangCode == "Fr") { // Message par défaut
		jssOut("JavaScript Shell version " + jssVersion + "\nAuteur : Théophile Walter\n\nPour utiliser JS-SHELL sur votre site tapez <a href=\"#jsShell use\">jsShell use</a>\n");
	} else if (jssLangCode = "En") {
		jssOut("JavaScript Shell version " + jssVersion + "\nAuthor : Théophile Walter\n\nTouse JS-SHELL on your website, type <a href=\"#jsShell use\">jsShell use</a>\n");
	}
} else {
	switch (params[0]) {
		case "use": // Affichage de l'utilisation
			jssInternalExec("/src/type.js", ["/src/jss.txt", "-n"]);
			if (jssLangCode == "Fr") {
				jssOut("JavaScript Shell est une console en ligne de commandes développée en JavaScript.\nElle permet d'exécuter des commandes elle-mêmes codées en JavaScript.\n\nToutes les sources des commandes se trouvent dans le dossier <i>/src/</i>, ainsi lorsque vous appelez la commande <i>foo</i>, JS-SHELL réécrit l'emplacement du fichier à appeler en <i>/src/foo.js</i> (les deux notations sont identiques). Certaines commandes se trouvent dans le dossier <i>/sys/</i> de façon à éviter qu'elles ne soient appelées par erreur.\n\nVous pouvez appeler une commande depuis l'URI de JS-SHELL en la donnant comme \"identifier\", par exemple <a href=\"#test\">#test</a> appelera la commande <i>test</i>.\n\nJS-SHELL se charge dans une page web dédiée et utilise tout l'emplacement disponnible, si vous souhaitez l'utiliser dans une partie de la page, utilisez un <i>iframe</i>.\nVous pouvez télécharger les sources de JS-SHELL et les utiliser pour votre site en utilisant la commande <a href=\"#jsShell download\">jsShell download</a>.\n");
			} else if (jssLangCode = "En") {
				jssOut("JavaScript Shell is an online commands shell developed in JavaScript.\nIt allows to execute commands coded in JavaScript.\n\nAll command's sources are located in the <i>/src/</i> folder, and when you call the <i>foo</i> command JS-SHELL rewrites the file location to call <i>/src/foo.js</i> (both notations are identical). Some commands are located in the <i>/sys/</i> folder to avoid calling them by mistake.\n\nYou can call a command from the JS-SHELL URI giving as \"identifier\", for example <a href=\"#test\">#test</a> will call the <i>test</i> command.\n\nJS-SHELL loads into a web page dedicated and uses all disponnible space, if you want to use in a part of the page, a use an <i>iframe</i>.\nYou can download the sources of JS-SHELL and use them for your site by typing <a href=\"#jsShell download\">JSShell download</a>.\n");
			}
			break;
		case "download": // Téléchagrement
			window.open("http://walter.tw/js-shell/js-shell.zip",'_blank');
			jssOut("<a href=\"http://walter.tw/js-shell/js-shell.zip\" target=\"_blank\">js-shell.zip</a>\n")
			break;
		case "embed":
			var width = 700, height = 500;
			if (params.length >= 3) {
				height = params[2];
			}
			if (params.length >= 2) {
				width = params[1];
			}
			jssOut(jssHTMLEscape("<iframe src=\"http://walter.tw/js-shell/\" width=\"" + width + "\" height=\"" + height + "\" frameBorder=\"0\"></iframe>\n"));
			break;
	}
}