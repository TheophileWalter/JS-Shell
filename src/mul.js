// Effectue une multiplication
var calculated = false;
if (params.length >= 3) {
	if (params[2] == "-c") {
		jssOut(params[0] * params[1] + "\n");
		calculated = true;
	}
}
if (params.length >= 2 && !calculated) {
	jssOut(params[0] + " x " + params[1] + " = " + (params[0] * params[1]) + "\n");
}