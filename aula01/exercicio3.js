document.write("<h1>Exercício 3</h1>");

var valor = Number(prompt("Digite o valor da pretação em atraso:"));
var taxa =  Number(prompt("Digite o valor a taxa:"));
var tempo = Number(prompt("Digite o tempo:"));

var resultado = valor + (valor * (taxa * taxa /100) * tempo);
document.write("<p>o valor da parcela será " + resultado + "</p>")

