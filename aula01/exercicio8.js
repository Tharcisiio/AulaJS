var peso = Number (prompt("Digite o peso: "));
var altura = Number (prompt("Digite a altura: "));

var resultado = ( peso / (altura * altura));

document.write("<p>o valor do IMC: " + resultado + "</p>");