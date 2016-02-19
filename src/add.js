// Effectue une addition
var calculated = false;
if (params.length >= 3) {
	if (params[2] == "-c") {
		jssOut(parseInt(params[0]) + parseInt(params[1]) + "\n");
		calculated = true;
	}
}
if (params.length >= 2 && !calculated) {
	jssOut(params[0] + " + " + params[1] + " = " + (parseInt(params[0]) + parseInt(params[1])) + "\n");
}