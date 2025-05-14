let boton = document.getElementById("miBoton");
///en le html el script siempte debe quedar de ultimo pora que asi los eventos que hagan

function mostrarMensaje(){
alert("El boton ha sido tocado")

};
function otroMensaje(){

    alert('flotar')
};

boton.addEventListener('click', mostrarMensaje);

boton.addEventListener('mouseover', otroMensaje);