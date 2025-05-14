let select = document.getElementById("listaSelect");
let input = document.getElementById("buscador");
let boton = document.getElementById("miBoton");
let lista = document.getElementById("lista");

select.addEventListener("change", cambiarArchivo);
let serieOPelicula = "pelicula.json"
select.addEventListener("cambio", function(){

    alert("Se modifico el archivo base a :" + select.value);

} )
input.addEventListener("keydown", soloTeclas);
boton.addEventListener("click", buscar);
 



function soloTeclas(event){
// Permitimos letras A–Z (65–90), espacio (32), borrar (8)
   let code = event.keyCode || event.which; 
if (
    !(code >= 65 && code <= 90) && 
    code !== 32 && 
    code !== 8
  ) {
    event.preventDefault();
  }


}

function cambiarArchivo(){
  serieOPelicula = select.value;

let evento = new CustomEvent("cambio");
 select.dispatchEvent(evento);

}

function buscar(){
 lista.innerHTML = "";

    fetch(serieOPelicula).then(res => res.json()).
    then((salida)=>{
        for(let item of salida.data){
        if(item.nombre.toUpperCase().startsWith(input.value.toUpperCase())){

            let p  = document.createElement("p");
            p.id=item.nombre
            p.innerHTML = item.sinopsis;
            p.style.display = "none";

            let li = document.createElement("li");
            li.innerHTML = item.nombre;
            li.addEventListener('mouseover', function() {
            let p = document.getElementById(item.nombre);
            p.style.display = 'block';



                });
                li.addEventListener('mouseout', function() {
                    let p = document.getElementById(item.nombre);
                    p.style.display = 'none';
                
                });


                li.appendChild(p);
                lista.appendChild(li);
            }
        }
    })
    .catch(function(error) {
    alert("Error al cargar datos: " + error);
    });
}


