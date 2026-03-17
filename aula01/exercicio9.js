var principal = Number (prompt("Digite o valor inicial:"));
var taxa = Number (prompt("Digite a taxa de juros: "));
var tempo = Number (prompt("Digite o tempo (em anos): "));


var resultado = principal *  ( 1+ (taxa * tempo));

document.write("<p>o valor do montante: " + resultado + "</p>");