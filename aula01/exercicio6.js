var quantidade = Number (prompt("Digite a quantidade do produto:"));
var preco = Number (prompt("Digite o preço do produto: "));



subtotal= quantidade * preco
desconto = subtotal * 0.10
final = subtotal - desconto

document.write("<p>o valor do subtotal: " + subtotal + "</p>");
document.write("<p>o valor do desconto: " + desconto + "</p>");
document.write("<p>o valor do final: " + final + "</p>");