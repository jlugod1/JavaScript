let menu = document.getElementById("miMenu");
let boton = document.getElementById("miBoton");

boton.addEventListener("mouseover", function(){

menu.style.display = "block";


})
boton.addEventListener("mouseout", function(){

menu.style.display = "none";


})

document.addEventListener("mousemove", function(event){

    console.log("posicion x:" + event.clientx + " - posicion y: " + event.clientY )
})
/*Prácticas: Eventos del Ratón 1
Dado el código HTML proporcionado, programar la 
función agregarEvento() del archivo index.js, que 
agregue un evento mouseover al boton miBoton. Al 
disparar el evento, deberá imprimir en consola el
 mensaje: Mouse sobre botón*/ 

 function agregarEvento() {
    let boton = document.getElementById('miBoton');
    boton.addEventListener("mouseover", function(){
        console.log("Mouse sobre botón");
    })
}