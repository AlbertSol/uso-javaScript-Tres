var people = [
    {name: "Bebe Flutter", image: "1.jpg"},
    {name: "Bebes Flutter", image: "2.jpg"},
    {name: "WALL-E", image: "3.jpg"},
    {name: "WALL-E and Eva", image: "4.jpg"},
    {name: "Hatsune Miku", image: "5.jpg"}
]

//Funcion para generar un numero al azar.
function generaNumero(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function accionBotonCLick(){
    //genera un numero aleatorio ente 1 y el numero total de personas
    var randomNumber = generaNumero(1, people.length);
    //Muestre el numero aleatorio en el elemento ID "randomNumer"
    document.getElementById("randomNumber").innerText = "Numero aleatorio: " + randomNumber;
    //Obtiene la persona correspondiente al numero generado.
    var selectedPerson = people[randomNumber - 1];
    //actualiza la imagen de la persona con la nueva ruta.
    document.getElementById("personImage").src = "assets/" + selectedPerson.image;
    //Muestra el nombre de la persona
    document.getElementById("personName").innerText = selectedPerson.name;
}

//Agrega un event listener al boton para llama a la funcion accionBotonClick
document.getElementById("btngenera").addEventListener("click", accionBotonCLick);