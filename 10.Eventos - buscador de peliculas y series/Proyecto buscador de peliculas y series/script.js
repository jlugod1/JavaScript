// Obtenemos referencias a los elementos del HTML por su ID
let select = document.getElementById("listaSelect"); // Menú desplegable
let input = document.getElementById("buscador");     // Caja de texto de búsqueda
let boton = document.getElementById("miBoton");      // Botón de búsqueda
let lista = document.getElementById("lista");        // Lista donde se mostrarán los resultados

// Al seleccionar una opción del menú (películas o series), se llama a cambiarArchivo
select.addEventListener("change", cambiarArchivo);

// Archivo por defecto que se usará al cargar datos
let serieOPelicula = "pelicula.json";

// Este evento personalizado (llamado 'cambio') muestra un mensaje cuando se cambia de archivo
select.addEventListener("cambio", function(){
    alert("Se modificó el archivo base a: " + select.value);
});

// Cuando se presiona una tecla dentro del input, se valida con la función soloTeclas
input.addEventListener("keydown", soloTeclas);

// Cuando se hace clic en el botón, se ejecuta la búsqueda
boton.addEventListener("click", buscar);

// Esta función permite solo letras (A-Z), espacio (32) y borrar (8)
function soloTeclas(event){
    let code = event.keyCode || event.which;

    if (
        !(code >= 65 && code <= 90) && // Letras A-Z
        code !== 32 &&                 // Espacio
        code !== 8                    // Borrar (Backspace)
    ) {
        event.preventDefault();       // Cancela la tecla si no está permitida
    }
}

// Esta función actualiza el archivo base cuando se cambia el menú (select)
function cambiarArchivo(){
    serieOPelicula = select.value; // Guarda el nuevo valor del select (ej: "serie.json")
    
    // Crea y lanza un evento personalizado llamado "cambio"
    let evento = new CustomEvent("cambio");
    select.dispatchEvent(evento);
}

// Esta función busca coincidencias y muestra los resultados
function buscar(){
    lista.innerHTML = ""; // Limpia los resultados anteriores de la lista

    // Cargamos el archivo seleccionado (película o serie) usando fetch
    fetch(serieOPelicula)
    .then(res => res.json()) // Convertimos la respuesta a formato JSON
    .then((salida) => {
        // Recorremos todos los elementos del array "data" del JSON
        for(let item of salida.data){
            // Comparamos si el nombre comienza con el texto ingresado en el input
            // Convertimos ambos a mayúsculas para que no importe si está en mayúsculas o minúsculas
            if(item.nombre.toUpperCase().startsWith(input.value.toUpperCase())){

                // Creamos un párrafo que contiene la sinopsis y lo ocultamos por defecto
                let p  = document.createElement("p");
                p.id = item.nombre;
                p.innerHTML = item.sinopsis; // insertamos la sinopsis como contenido HTML
                p.style.display = "none";    // lo ocultamos

                // Creamos un elemento de lista con el nombre de la película o serie
                let li = document.createElement("li");
                li.innerHTML = item.nombre;

                // Cuando pasamos el mouse sobre el li, se muestra la sinopsis
                li.addEventListener('mouseover', function() {
                    let p = document.getElementById(item.nombre);
                    p.style.display = 'block';
                });

                // Cuando quitamos el mouse, se vuelve a ocultar la sinopsis
                li.addEventListener('mouseout', function() {
                    let p = document.getElementById(item.nombre);
                    p.style.display = 'none';
                });

                // Agregamos el párrafo (sinopsis) dentro del li
                li.appendChild(p);

                // Finalmente, agregamos el li a la lista en el HTML
                lista.appendChild(li);
            }
        }
    })
    .catch(function(error) {
        // Si ocurre un error (como no encontrar el archivo), lo mostramos en un alert
        alert("Error al cargar datos: " + error);
    });
}
