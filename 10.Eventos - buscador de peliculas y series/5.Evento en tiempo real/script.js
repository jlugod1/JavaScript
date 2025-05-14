// Creamos una nueva conexión WebSocket hacia el servidor en la dirección ws://localhost:8080
let socket = new WebSocket('ws://localhost:8080');

// Obtenemos la referencia al campo de texto donde el usuario escribe su mensaje
let mensajeIngresado = document.getElementById("mensajeIngresado");

// Obtenemos la referencia al botón que el usuario presiona para enviar el mensaje
let botonEnviar = document.getElementById("botonEnviar");

// Función para mostrar un mensaje en la página
function mostrarMensaje(contenido){
    // Obtenemos el contenedor donde se mostrarán todos los mensajes
    let contenedorMensajes = document.getElementById("mensaje");
    
    // Creamos un nuevo elemento HTML <p> para mostrar el mensaje
    let elementoMensaje = document.createElement("p");

    // Le asignamos el texto del mensaje al nuevo elemento
    elementoMensaje.innerText = contenido;

    // Agregamos el elemento <p> al contenedor de mensajes para que se vea en la página
    contenedorMensajes.appendChild(elementoMensaje);
}

// Cuando el usuario hace clic en el botón para enviar el mensaje...
botonEnviar.onclick = function(){
    // Obtenemos el valor que el usuario escribió en el campo de texto
    let mensaje = mensajeIngresado.value;

    // Mostramos ese mensaje en pantalla (como si fuera un "eco" local)
    mostrarMensaje(mensaje);

    // Enviamos el mensaje al servidor WebSocket
    socket.send(mensaje);
}

// Esta función se ejecuta cuando el servidor nos envía un mensaje a través del WebSocket
socket.onmessage = function(event){
    // event.data contiene el mensaje recibido desde el servidor
    let mensaje = event.data;

    // Mostramos el mensaje recibido en la pantalla
    mostrarMensaje(mensaje);
}

/* Prácticas: Eventos en Tiempo Real 1
Declarar una variable socket, que 
establezca una comunicación con el servidor
 ws://localhost:8080 y a través del mismo, 
 enviar el mensaje "¡Hola mundo!"

*/// Creamos la conexión con el servidor WebSocket en localhost:8080
let socket = new WebSocket('ws://localhost:8080');

// Función que se ejecuta para enviar un mensaje al servidor
function enviarMensaje() {
    // Definimos el mensaje que queremos enviar
    let mensaje = "¡Hola mundo!";

    // Enviamos el mensaje al servidor usando el WebSocket
    socket.send(mensaje);
}

// Esta función se ejecuta automáticamente cuando el cliente recibe un mensaje del servidor
socket.onmessage = function(event) {
    // Obtenemos el mensaje recibido desde el servidor
    let mensaje = event.data;

    // Mostramos el mensaje en la consola
    console.log("Mensaje recibido del servidor:", mensaje);

    // Aquí podrías mostrarlo en la pantalla si quieres:
    // Ejemplo (si tienes un <div id="mensajes"> en el HTML):
    /*
    let contenedor = document.getElementById("mensajes");
    let nuevoParrafo = document.createElement("p");
    nuevoParrafo.innerText = mensaje;
    contenedor.appendChild(nuevoParrafo);
    */
}

/* Prácticas: Eventos en Tiempo Real 2
Declarar una variable socket, que establezca una
 comunicación con el servidor ws://localhost:4200 y 
 que capture el evento onmessage para recibir mensajes
  del servidor. Al dispararse el evento, se pide imprimir
   en consola el contenido del mensaje mediante event.data

*/let socket = new WebSocket('ws://localhost:4200');
socket.onmessage = function(event) {
    console.log(event.data);
}