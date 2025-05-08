function Libro(auto, titulo, cantPaginas){
this.autor= autor;
this.titulo= titulo;
this.cantPaginas = cantPaginas;


}
let Libro1= new Libro("Stephen", "Carrie", 524);

let libro2 = Object.create(Libro1);




//para modificar un objeto prototipo de
//aca hicimos esta funcion sobre el objeto, por lo que no no podifica
//a toda la cadena
Libro.abrirLibro = function(){

alert( this.titulo + "Ha sido abierto");
};
//si creamos otra istancia de libro
let libro3 = new Libro("j.l", "borges", 394);

libro3.abrirLibro()//nose añadiria a  la instacia asi que libro3 no podria usar estra funcion
//esti sucede por que se esta añadiendo esta funcion a la unidad literal de libro
//y no en la propiedad prototimos que es lo que hace que hereden las demas instancias

//ahora si lo hacemos asi; 
Libro.prototype.abrirLibro = function(){


  alert( this.titulo + "Ha sido abierto");

}
//asi si prodria modifiacar a toda la cadena de herencia (libro1 , libro2)
//y podria usar la fundion que herede a todos
libro3.abrirLibro();
libro2.abrirLibro();
Libro1.abrirLibro();

//es importate hacer modificacion con prototype con 
//con variables constate (qeu todas las instancias puedan tener ocmo pero 4 patass) y funicones 


//recomienda separar los metodos con esta nueva funcion y asi
//no colocarlos dentro del constructor para poder separarlos,
//y sea mas facil de enterder
//Ejemplo:
function unObjeto(a){
this.a=a;
}

unObjeto.prototype.metodo1 = function(){};
unObjeto.prototype.metodo2 = function(){};
unObjeto.prototype.metodo3 = function(){};

/*Prácticas: Modificar Prototipos 1
Dado el constructor Videojuego
 y la instancia videojuego1 ya 
 declarados, se pide agregar una función 
 al objeto prototipo Videojuego, de forma 
 que se herede de forma dinámica a la instancia
  videojuego1 a través de prototype. 
  La función se debe llamar play(), 
  y debe imprimir en consola: 
  "[nombre del videojuego] ha sido iniciado"*/

  function Videojuego(nombre, empresa, anioLanzamiento) {
    this.nombre = nombre;
    this.empresa = empresa;
    this.anioLanzamiento = anioLanzamiento;
}

let videojuego1 = new Videojuego('Mario Bros', 'Nintendo', 1983);

Videojuego.prototype.play = function(){
    
    console.log(this.nombre + " ha sido iniciado")
    
}

//otra práctica

function Cancion(nombre, autor, album) {
  this.nombre = nombre;
  this.autor = autor;
  this.album = album;
}

let cancion1 = new Cancion('Take on Me', 'a-ha', 'Hunting High and Low');


Cancion.prototype.stop = function(){
  
  console.log(this.nombre + " en pausa")
  
}