// Ajoute une valeur en haut de la pile
if (params.length >= 1) {
	for (i = 0; i < params.length; i++) {
		jssStack[jssStackSize] = params[i];
		jssStackSize++;
	}
}