function crearParrafoTienda(textoLabel, valorMin){

//crear etiquetas <p>
let elementoParrafo = document.createElement("p");
 //crear etiqueta <label> 

 let elementoEtiqueta = document.createElement("label");
 //conectar con input

 elementoEtiqueta.setAttribute("for", textoLabel);
 elementoEtiqueta.innerText = textoLabel + " ; ";

 //crear input

 let elementoInput = document.createElement("input");

 //establecer atributos de input

 elementoInput.setAttribute("type", "number");
 elementoInput.setAttribute("id", textoLabel);
 elementoInput.setAttribute("min", valorMin);
 elementoInput.setAttribute("value", 0);//este refleja el valor inicial del input

 //agregar label e input al parrafo 
 elementoParrafo.appendChild(elementoEtiqueta);

 elementoParrafo.appendChild(elementoInput);


 //devolver el parrafo completo

 return elementoParrafo;
}

function crearTiendas(contenedorID, min, cantidadTiendas ){

//encontrar contenedor por su id
let elementoContenedor = document.getElementById(contenedorID);
//loop para crear tantas tieendas como se pidan
for(let conteoTiendas=1; conteoTiendas<= cantidadTiendas; conteoTiendas++){

  ///crear el texto de label para poder llamar a la funcion

let textoEtiqueta = "tienda " + conteoTiendas ;

//crear riendas con crearParrafoTienda
let parrafoTiendas = crearParrafoTienda(textoEtiqueta, min);

//agregar el parrafo al contenedor
elementoContenedor.appendChild(parrafoTiendas);

}

}


function extraerNumeroDesdeElemento(elemento){


let miTexto = elemento.value;
let miNumero = Number(miTexto);
  
return miNumero;

}

function calcular(){
let ventas = [];
let posicionVenta =0;
let elementosVentas = document.getElementById("itemsTienda");

for(let item of elementosVentas.children){

let valorVenta = extraerNumeroDesdeElemento(item.children[1]);
ventas[posicionVenta] = valorVenta;
posicionVenta = posicionVenta +1;


}



  
  
  

let totalVentas = total(ventas);

let maximo = calcularMaximo(ventas);

let minimo = calcularMinimo(ventas);

for(let parrafo of elementosVentas.children){
  let input = extraerNumeroDesdeElemento(parrafo.children[1]);

  input.className = "neutro";

  if (input == maximo) {
    parrafo.children[1].className = "gato"; // Asigna clase CSS
  
  
  } if (input == minimo) {
    parrafo.children[1].className = "casa";
  
  
  }
  
  
    
    
    }






let mensajeSalida = "total de ventas:" + totalVentas;
let elementoSalida = document.getElementById("parrafoSalida");
elementoSalida.textContent = mensajeSalida;
  





}

function total(array){

let total=  0;

for(let venta of array){

total += venta;


}
return total;

}
function  calcularMaximo(array){

let maximo = array[0];

for (let venta of array ){
  if(venta > maximo){
maximo = venta;

  }

}
return maximo;


}
function  calcularMinimo(array){

    let minimo = array[0];
    
    for (let venta of array ){
      if(venta < minimo){
    minimo = venta;
    
      }
    
      
    
    
    
    }
    return minimo;
    
    
    }