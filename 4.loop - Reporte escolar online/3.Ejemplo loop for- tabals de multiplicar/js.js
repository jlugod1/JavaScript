function multiplicar(){
//Odtener el numero
let elementoTextoTabla = document.getElementById("textoTabla");
let textoNumeroTabla = elementoTextoTabla.value;
//lo convierto en int
let numeroTabla = Number(textoNumeroTabla);

//odtener tabla

let elementoTablaMultiplicar = document.getElementById("listaTabla");


//Producir y mostrar resultados

for(x=1; x <= 10; x++){

//calcular resultado

let numeroResultado = numeroTabla * x;

let textoResultado = numeroTabla + " por " + x + " es igual " + numeroResultado; 
 

//crear elemento de la lista//esto es para la ul y sus elementos son li

 let itemLista = document.createElement("li");
itemLista.innerText = textoResultado;
elementoTablaMultiplicar.appendChild(itemLista);

}

}