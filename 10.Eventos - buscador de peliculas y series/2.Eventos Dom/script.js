let boton = document.getElementById("miBoton");
///en le html el script siempte debe quedar de ultimo pora que asi los eventos que hagan
let div = document.getElementById("contenedor");
let enlace = document.getElementById("div");

function evitarEnlace(event){
event.preventDefault();
alert("enlace no esta habilitado")


}


function mostrarMensaje(event){
alert(event.target);
alert(event.currentTarget);
};

enlace.addEventListener('click', evitarEnlace);
boton.addEventListener('click', mostrarMensaje);
/*Prácticas: Eventos 3
Dado el código HTML proporcionado, programar 
 la función agregarEvento() del archivo 
 script.js, que agregue un evento click al
  boton miBoton. Utilizando la variable event
   asociada al evento, y utilizando la propiedad
    target, se puede acceder al elemento nodeName, que retorna el nombre de la etiqueta HTML que 
    disparo el evento. Se pide imprimir en consola
     el contenido del elemento nodeName.

 */
function agregarEvento() {
    // Esta función será llamada cuando se haga click en el botón
    // El parámetro event se pasa automáticamente por el event listener
    return function(event) {
        // Accedemos al nodeName del elemento que disparó el evento
        const nodeName = event.target.nodeName;
        // Imprimimos en consola
        console.log(nodeName);
    };
}

let botoon = document.getElementById('miBoton');
// Agregamos el event listener, llamando a agregarEvento() que retorna la función manejadora
botoon.addEventListener('click', agregarEvento());

