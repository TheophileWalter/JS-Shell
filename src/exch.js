// Echange les deux valeurs en haut de la pile
if (jssStackSize >= 2) {
	var tmp = jssStack[jssStackSize - 1];
	jssStack[jssStackSize - 1] = jssStack[jssStackSize - 2];
	jssStack[jssStackSize - 2] = tmp;
} else {
	jssOut("<span style=\"color:red;\">Error: jssStack is too small !</span>\n");
}