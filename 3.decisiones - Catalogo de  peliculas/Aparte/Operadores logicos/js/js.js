function calcular(){

let respuesta1 = document.getElementById("r1");
let respuesta2 = document.getElementById("r2");
let respuesta3 = document.getElementById("r3");



let elementoEdad = document.getElementById("comprobar");
let edad = elementoEdad.value;

let puedeBeber = edad >= 18;
respuesta1.textContent = puedeBeber;

let puedeIngresar = edad >= 18 && edad <= 30;
respuesta2.textContent = puedeIngresar;

let entraGratid = edad == 20 || edad== 25;
respuesta3.textContent = entraGratid;

}
