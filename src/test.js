// Commande de test

// Récupère les paramètres
if (params.length < 1) {
	text = "Hello world!";
} else {
	text = params[0];
}
if (params.length < 2) {
	color = "red";
} else {
	color = params[1];
}

// Affiche le message
jssOut('<div style="color:' + jssHTMLEscape(color) + ';">' + jssHTMLEscape(text) + '</div>');