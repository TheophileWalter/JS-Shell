// Evalue une expression
if (params.length >= 1) {
	// Praparation des paramètres
	var expression = "";
	for (i = 0; i < params.length - 1; i++) {
		expression += params[i] + " ";
	}
	expression += params[params.length - 1];
	// Evaluation de l'expression
	var expressionEvaluation = false;
	eval("expressionEvaluation = (" + expression + ") ? true : false;");
	console.log("expressionEvaluation = (" + expression + ");\n");
	jssOut(expressionEvaluation + "\n");
}