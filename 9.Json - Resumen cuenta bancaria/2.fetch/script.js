//FETCH libreria
//extraer /recuperar
//solicitufes htto asincronas

//es una alternativa a XMLHttpRequest
//interfaz  + simple / simtaxis mas limpia

//mas facil de usar
//mas moderna 
//devuelve una promesa

//una promesa :es un objeto que representa a un valor que estara dispunible o esta disponible




let datosJson;

fetch('persona.json')//url del json
.then(res => res.json())//uan ves que se cumpla la promesa 
//res una variable qeu obtiene la informacion o promesa que estabamos piediendo
.then((salida) => {//se crea esta funcion para darle el valor a la variable

datosJson= salida;
let elementoTexto = document.getElementById("nombre");
elementoTexto.textContent = datosJson.nombre;
})
/*
Prácticas: Fetch 1
Dado el archivo auxiliar datos.json, 
obtener los datos de dicho archivo 
utilizando fetch y asigne cada campo 
a la variable correspondiente ya
 declarada.



*/
function obtenerDatos() {
    
    let datosJson;
    
    fetch('datos.json').then(res=>res.json()).then((salida)=> {
        
        datosJson = salida;
        datosJson.titulo;
        datosJson.director;
        datosJson.lanzamiento;
        datosJson.datosJson.duracion;
        datosJson.actores;
        datosJson.premioOscar;
        
        
    })
    
    
}