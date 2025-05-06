function extraerNumeroDesdeElemento(elemento){

let miElemento = document.getElementById(elemento)
let miTexto = miElemento.value;
let miNumero = Number(miTexto);
  
return miNumero;

}

function calcular(){
let ventas = [];



ventas[1] = extraerNumeroDesdeElemento("ventasTienda1");
ventas[2] = extraerNumeroDesdeElemento("ventasTienda2");
ventas[3] = extraerNumeroDesdeElemento("ventasTienda3");
ventas[4] = extraerNumeroDesdeElemento("ventasTienda4");
ventas[5] = extraerNumeroDesdeElemento("ventasTienda5");
ventas[6] = extraerNumeroDesdeElemento("ventasTienda6");


let totalVentas = totalVentas(ventas);

let maximo = calcularMaximo(ventas);

let minimo = calcularMinimo(ventas);

let mensajeSalida = "total de ventas:" + totalVentas + "la venta maxima fue:" + maximo + "la venta minima fue:" + minimo;
let elementoSalida = document.getElementById("parrafoSalida");
elementoSalida.textContent = mensajeSalida;
  





}

function totalVentas(array){

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

  return maximo;



}



}
function  calcularMinimo(array){

    let minimo = array[0];
    
    for (let venta of array ){
      if(venta < minimo){
    minimo = venta;
    
      }
    
      return minimo;
    
    
    
    }
    
    
    
    }