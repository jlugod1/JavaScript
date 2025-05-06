function consultarPrecio(){

    let elementoRespuesta = document.getElementById("textoPrecio");
    let elementoFruta = document.getElementById("numeroFruta");
    let fruta = elementoFruta.value;

switch(fruta){


case "1":
    elementoRespuesta.textContent = "$8.96";
    break;

case "2":
    elementoRespuesta.textContent = "$6.45";
    break;


case "3":
     elementoRespuesta.textContent = "$7.65";
     break;
     
case "4":
     elementoRespuesta.textContent = "$10.49";
     break;
case "5":
     elementoRespuesta.textContent = "$1.31";
    break;
}

}
