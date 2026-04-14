function exemplo12()

{

    let quilometro = Number (document.getElementById("quilometro").value);
    let percorrido = Number (document.getElementById("percorrido").value);
    let tempo = Number (document.getElementById("tempo").value);


    let resultado;

    resultado = (quilometro * percorrido) + (tempo * 0.50);






    document.getElementById("resultado").innerHTML = "<p> O valor total da corrida é: " + resultado +"</p>";

};
