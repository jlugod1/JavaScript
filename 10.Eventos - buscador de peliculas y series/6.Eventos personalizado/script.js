let audio = document.getElementById("audio");
let listaCanciones = document.getElementById("listaCanciones");

listaCanciones.addEventListener("change", cambiarCancion);

function cambiarCancion(){
let cancionElegida = listaCanciones.value;
audio.src = cancionElegida;

audio.play();

let evento = new CustomEvent("cambioDeCancion");
audio.dispatchEvent(evento);




}

audio.addEventListener( "cambioDeCancion", mostrarCancion);

function mostrarCancion(){


    console.log("La cancion actual es: "  + listaCanciones.value)
}

/*
Prácticas: Eventos Personalizados 1
Dado el código HTML proporcionado y la función
agregarEvento() del script.js ya desarrollada, 
se pide agregar el contenido necesario para crear 
un evento personalizado una vez que se dispare el
 evento click del botón miBoton, y asignar este
  evento al mismo botón. Al disparar el evento personalizado,

 se debe imprimir en consola el mensaje: "Boton presionado" */
 function agregarEvento() {
    let boton = document.getElementById('miBoton');

    boton.addEventListener('click', function() {
        
    let evento = new CustomEvent("personalizado");
boton.dispatchEvent(evento);
    });
    
    
    
    boton.addEventListener("personalizado", mostaraConsola);

function mostaraConsola(){
    
    
    console.log("Boton presionado");
}
}
/*
Prácticas: Eventos Personalizados 2
Dado el código HTML proporcionado y
 la función agregarEvento() del script.js
  ya desarrollada, se pide agregar el contenido 
  necesario para crear un evento personalizado una
   vez que se dispare el evento click de la etiqueta 
   <a> miEnlace, y asignar este evento al mismo elemento. 
   Al disparar el evento personalizado,
 se debe mostrar en un alert el mensaje: "Redireccion activada" */

 function agregarEvento() {
    let enlace = document.getElementById('miEnlace');

    enlace.addEventListener('click', function() {
    let evento = new CustomEvent("personalizado");
    enlace.dispatchEvent(evento);
    });
enlace.addEventListener("personalizado", mostarAlert);

function mostarAlert(){
    
    
   alert("Redireccion activada");


}
}