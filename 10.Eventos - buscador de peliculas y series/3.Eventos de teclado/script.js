/// Obtenemos el input con id "miCampo" desde el HTML
let campo = document.getElementById("miCampo");

// Función que se activa cuando se presiona una tecla
function verificarNumero(event) {
    /*
    Cada tecla tiene un valor (código ASCII).
    En este caso, vamos a evitar que se escriban números del 0 al 9.
    
    El código ASCII de los números va del 48 al 57.
    Si se presiona una tecla fuera de ese rango, se bloquea (no se escribe en el input).
    */
    if (event.keyCode >= 48 && event.keyCode <= 57) {
        // Si es un número, evitamos que se escriba en el campo
        event.preventDefault();
    }
}

// Evento que se activa cuando se PRESIONA una tecla
campo.addEventListener("keydown", verificarNumero);
/*
keydown: Se dispara apenas se presiona una tecla.
Aquí usamos este evento para evitar que los números aparezcan en el input.
*/

// Evento que se activa cuando se SUELTA una tecla
campo.addEventListener("keyup", function(event) {
    // Mostramos en la consola el valor actual que el usuario ha escrito en el input
    console.log("Entrada del usuario: " + event.target.value);
});
/*
keyup: Se activa cuando soltamos la tecla.
Ideal para ver lo que ya se escribió en el input hasta ese momento.
*/

// Evento que se activa cuando se PRESIONA Y SE SUELTA una tecla rápidamente
campo.addEventListener("keypress", function(event) {
    // Mostramos en la consola qué tecla se presionó (en formato de letra o símbolo)
    console.log("Tecla presionada: " + event.key);
});
/*
keypress: Detecta solo teclas que generan un carácter (no detecta teclas como Shift o Ctrl).
Se activa justo después de presionar y antes de soltar la tecla.
*/

/*Prácticas: Eventos de Teclado 1
Dado el código HTML proporcionado, programar la función agregarEvento() del archivo index.js, que agregue un evento keypress al input miInput. Al disparar el evento, deberá imprimir en consola el código de la tecla presionada utilizando el elemento key de la variable event.*/

// Esta función se encarga de agregar un evento al input cuando se llama
function agregarEvento() {
    // Obtenemos el input desde el HTML usando su ID
    let input = document.getElementById('miImput');

    // Agregamos un "escuchador de eventos" que se activará al presionar una tecla
    input.addEventListener("keypress", function(event) {
        // Mostramos en la consola qué tecla fue presionada (por ejemplo: a, b, 1, etc.)
        console.log(event.key);
    });

    /*
    🔹 'keypress' se activa cuando el usuario presiona y suelta una tecla
    🔹 Este evento detecta solo teclas que escriben caracteres visibles (letras, números, símbolos)
    🔹 No detecta teclas como Shift, Ctrl, Alt, etc.
    */
}
function agregarEvento() {
    let input = document.getElementById("miInput");
    
    input.addEventListener('keypress', function(event) {
        console.log(event.key);
    });
}
/*Prácticas: Eventos de Teclado 2
Dado el código HTML proporcionado, programar la 
función agregarEvento() del archivo index.js, que
 agregue un evento keydown al input miInput. Al
  disparar el evento, deberá validar que el usuario
   no pueda ingresar en el input la barra espaciadora
    si la presiona. El número key de la barra 
    espaciadora es 32. */

    function agregarEvento() {
    let input = document.getElementById("miInput");
    input.addEventListener('keydown', function(event) {
      if(event.key == 32){
          event.preventDefault();
          
      }
    });
}
/*Evento	¿Cuándo se activa?	         Uso común
keydown	    -Al presionar una tecla	     - Detectar y bloquear teclas
keyup	    -Al soltar una tecla Leer    -lo que ya se escribió en el input
keypress	-Al presionar y soltar una   -tecla	Saber qué letra o símbolo fue presionado*/