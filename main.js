function downloadStatus() {
    let divSaludar = document.getElementById("messageDownCv");
    if (divSaludar.innerText == "Downloaded!") {
        divSaludar.innerText = "Not downloaded";
    } else divSaludar.innerText = "Downloaded!";

}

let cvButton = document.getElementById("cvButton");
cvButton.addEventListener("click", downloadStatus); // Primer parametro es el evento a detectar, y el segundo es que hacer(En este caso una función.)

let fechaYHora = new Date(); // Guardo en la variable la fecha, horas y minutos.
let hora = fechaYHora.getHours(); //    Guardo en la variable solo las horas
let divHi = document.getElementById("sayHi");
if (hora >= 6 && hora < 13) {
    divHi.innerText = "Good morning!";
} else if (hora >= 13 && hora < 19) {
    divHi.innerText = "Good afternoon!";
} else {
    divHi.innerText = "Good night!";
}