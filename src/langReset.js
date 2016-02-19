// Change la langue puis redémarre la console
if (params.length >= 1) {
	jssInternalEval("lang " + params[0]);
	jssInternalEval("reset");
}