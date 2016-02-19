// Affiche une alerte
if (params.length >= 1) {
	var message = "";
	for (i = 0; i < params.length - 1; i++) {
		message += params[i] + " ";
	}
	message += params[params.length - 1];
	alert(message);
}