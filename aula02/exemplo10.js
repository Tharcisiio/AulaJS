function Exemplo10()
{
let principal = Number (document.getElementById("principal").value);
let taxa = Number (document.getElementById("taxa").value);
let tempo = Number (document.getElementById("tempo").value);
 
let resultado;
 
resultado = principal *   1+ taxa * tempo
 
document.getElementById("resultado").innerHTML = "<p> O valor do montante é: " + resultado +"</p>";
 
};