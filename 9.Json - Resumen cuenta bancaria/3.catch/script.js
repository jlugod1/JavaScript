//catch nos piermite tomar los errores que se puedan producir
//y poder manejarlos, es un metodo que se utiliza en promesas para manejar los posibles errores

let datosJson;

fetch('persona.json')//url del json
.then(res => res.json())//uan ves que se cumpla la promesa 
//res una variable qeu obtiene la informacion o promesa que estabamos piediendo
.then((salida) => {//se crea esta funcion para darle el valor a la variable

datosJson= salida;
let elementoTexto = document.getElementById("nombre");
elementoTexto.textContent = datosJson.nombre;
})
.catch(function(error){
alert(error)})

/* Prácticas: Catch 1
Dado el código ya desarrollado en el ejercicio Fetch 1,
 agregar el elemento catch para capturar 
 posibles errores e imprimir en consola el error.*/

 let titulo;
let director;
let lanzamiento;
let duracion;
let actores;
let premioOscar;

function obtenerDatos() {
    fetch('datos.json')
    .then(respuesta => respuesta.json())
    .then(function(salida) {
        titulo = salida.titulo;
        director = salida.director;
        lanzamiento = salida.lanzamiento;
        duracion = salida.duracion;
        actores = salida.actores;
        premioOscar = salida.premioOscar;
    }).catch(function(error){
        
        alert(error)
        
    })
}