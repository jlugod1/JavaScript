function Automovil(marca, modelo, anio, titular  ){
this.marca = marca;
this.modelo = modelo;
this.anio = anio;
this.titular = titular;


}
// Creación de tres instancias
let auto1 = new Automovil("Chevrolet", "Fiesta", 2025, "Jose Lugo");
let auto2 = new Automovil("Toyota", "Corolla", 2020, "María García");
let auto3 = new Automovil("Ford", "Mustang", 2018, "Carlos Pérez");

// Array para almacenar los automóviles
let automoviles = [auto1, auto2, auto3];


//agregaremos metodos a travez de prototype
//venderAutomovil (que recibe un nuevo dueño por parametro y actualiza la propiedad titular)
Automovil.prototype.venderAutomovil =  function(nuevoTitular){
        this.titular = nuevoTitular
        return nuevoTitular;

}

//verAuto (que va a retonar el resultado de concatenar las propiedades del automovil con el formato: Marca Modelo - Año - Titular)
Automovil.prototype.verAuto= function(){

    let mensaje = "Marca: " + this.marca + " - Modelo: " + this.modelo + " - Año: " + this.anio + " - Titular: " + this.titular;


return mensaje;

      }
// enceder (que va a mostrar en un alert el mensaje "El automovil esta en marcha").
function encender(){

alert(" Automovil esta en marcha!");

}



let tabla = document.getElementById("tabla");

function listaAutomovil(){


for(let autos of automoviles){
let lista = document.createElement("li");

lista.textContent = autos.verAuto();
tabla.appendChild(lista);
}





}
