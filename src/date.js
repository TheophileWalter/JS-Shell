// Affiche la date
var date = new Date();
var dateGetMounth = date.getMonth() + 1;
jssOut(date.getDate() + "/" + (dateGetMounth < 10 ? "0" + dateGetMounth : dateGetMounth) + "/" + date.getFullYear() + "\n");