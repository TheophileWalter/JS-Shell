// Sort la valeur en haut de la pile
if (jssStackSize > 0) {
	jssOut(jssStack[jssStackSize - 1] + "\n");
	jssStackSize--;
} else {
	jssOut("<span style=\"color:red;\">Error: jssStack is empty !</span>\n");
}