let empleados = [];

function Empleado(nombre, apellido, edad, cargo, area){
this.nombre = nombre;
this.apellido = apellido;
this.edad  = edad;
this.cargo = cargo;
this.area =area;

}

function extraerElemento(elemento){

    let miElemento = document.getElementById(elemento).value;
           return miElemento;
}


function nuevoEmpleado(){

let nombre = extraerElemento("nombre");
let apellido = extraerElemento("apellido");
let edad = extraerElemento("edad");
let cargo = extraerElemento("cargo");
let area = extraerElemento("area");

//para añadir los ojetos al array :
let nuevo = new Empleado(nombre, apellido, edad, cargo, area);
    empleados.push(nuevo);
alert("nuevo empleado" + nuevo.nombre);
blanquear();

}
//mostrar lista de empleados que se han ingresado
function lista(){
let mensaje = document.getElementById("mensaje");
mensaje.textContent ="";
for( let empleado of empleados ){

    for(let propiedades in empleado){

mensaje.textContent  += " " + propiedades.toLowerCase() + ": " + empleado[propiedades];



 }
 mensaje.textContent += "\n";


}
alert(mensaje.textContent );
//si colocara el mensaje sin el textConte me saledria el ojeto sin info


}

function blanquear(){

    document.getElementById("nombre").value  ="";
    document.getElementById("apellido").value  ="";
    document.getElementById("edad").value  ="";
    document.getElementById("cargo").value  ="";
document.getElementById("area").value ="";

}