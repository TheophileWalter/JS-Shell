// Affiche l'heure
var date = new Date();
jssOut(fastIntFormat(date.getHours()) + ":" + fastIntFormat(date.getMinutes()) + ":" + fastIntFormat(date.getSeconds()) + "\n");
function fastIntFormat(n) {
	return n < 10 ? "0" + n : n;
}