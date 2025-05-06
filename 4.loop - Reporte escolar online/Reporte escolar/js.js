



/*let array = [10, 3, 4, 9, 8];

let elementoTabla = document.getElementById("listaTabla");
let resultadoElement = document.getElementById("resultado");
function onLoad(){
 
    for(let calificacion of array){

        let itemLista = document.createElement("li");
        
        itemLista.innerText = calificacion;
elementoTabla.appendChild(itemLista);


    }



}

function Promedio(){

let suma = 0;

for(let i = 0; i < array.length; i++ ){
suma += array[i];

}
 let calculoPromedio = suma / array.length;

 resultadoElement.innerText ="El promedio es de " + calculoPromedio;

}

function NotaMasAlta(){
let i  = 0;

let notaMasAlta = array[0];

while(i < array.length){

if(array[i] > notaMasAlta){

notaMasAlta = array[i];

}
i++

}


resultadoElement.innerText ="La nota mas alta es:" + notaMasAlta;


}

function Aplazo(){

    let i = 0;
  let hayAplazo = false;

  do {
    if (array[i] < 4) {
      hayAplazo = true;
      break;
    }
    i++;
  } while (i < array.length);

  if (hayAplazo) {
    resultadoElement.innerText = "Sí, existe al menos un aplazo.";
  } else {
    resultadoElement.innerText = "No hay aplazos.";
  }




}*/

let array = [10, 3, 4, 9, 8];
let elementoTabla = document.getElementById("listaTabla");
let resultadoElement = document.getElementById("resultado");

function onLoad() {
    for(let calificacion of array) {
        let itemLista = document.createElement("li");
        itemLista.innerText = calificacion;
        
        // Añadir clase diferente para aplazos
        if(calificacion < 4) {
            itemLista.style.color = "white";
            itemLista.style.backgroundColor = "var(--danger-color)";
        } else if(calificacion >= 9) {
            itemLista.style.color = "white";
            itemLista.style.backgroundColor = "var(--success-color)";
        }
        
        elementoTabla.appendChild(itemLista);
    }
}

function Promedio() {
    let suma = 0;
    for(let i = 0; i < array.length; i++) {
        suma += array[i];
    }
    let calculoPromedio = suma / array.length;
    
    // Formatear a 2 decimales
    calculoPromedio = calculoPromedio.toFixed(2);
    
    resultadoElement.innerText = `El promedio es de ${calculoPromedio}`;
    resultadoElement.style.color = calculoPromedio >= 4 ? "var(--success-color)" : "var(--danger-color)";
}

function NotaMasAlta() {
    let notaMasAlta = Math.max(...array);
    resultadoElement.innerText = `La nota más alta es: ${notaMasAlta}`;
    resultadoElement.style.color = "var(--success-color)";
}

function Aplazo() {
    let hayAplazo = array.some(nota => nota < 4);
    
    if (hayAplazo) {
        resultadoElement.innerText = "¡Alerta! Existen aplazos.";
        resultadoElement.style.color = "var(--danger-color)";
        
        // Animación de alerta
        resultadoElement.style.animation = "shake 0.5s";
        setTimeout(() => {
            resultadoElement.style.animation = "";
        }, 500);
    } else {
        resultadoElement.innerText = "¡Felicitaciones! No hay aplazos.";
        resultadoElement.style.color = "var(--success-color)";
    }
}