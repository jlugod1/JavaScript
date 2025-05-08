//los prototipos sonmecanimos que permite herncia entre objetos
//el construtor es una mastris con el que podemos crear muchos ob jetos
//es una platilla con la que podemos crear y heredar propiedades

//los objetos prototipos pueden heredar otros asi como puede dar herencia.

let perro = {nombre:'Simba'};
//prototipo plantilla que sirve para crear otros objetos.

//aca creamos objeto instancia del prototipo perro
let perro1 = Object.create(perro);
///cuando revisamos en consola
//nos damos cuenta que perro1 sale sin valor pero si 
//puede acceder a las propiedades ejemplo perro1.nombre  'simba'
//por lo que podemos ver que solo el objeto prototipo tiene almacenada la info
//el objeto instacia puede recibir esta info atraves de un enlace que se crea __proto__


//Prácticas: Cadena de Prototipos 1
//Crea un objeto denominado auto, 
//con las propiedades marca y modelo, y 
//asígnale a estas propiedades algún valor.
 //Luego, dentro de la función prototipos(),
  //crea una instancia auto1 que se 
  //base en el prototipo auto. Se pide 
  //que, en la misma función, se imprima 
  //en consola el contenido de la propiedad 
  //proto de la instancia auto1, que como 
  //vimos, va a contener la referencia a su
  // prototipo.

  let auto = {
    marca:'chevlolet',
    modelo:'fiesta'
};

function prototipos() {
    let auto1 = Object.create(auto);
    console.log(auto1.__proto__);
}
let estudiante = { nombre: 'Paul', apellido: 'McCartney', legajo: 66992};
 
function prototipos() {
    let estudiante1 = Object.create(estudiante);
    console.log(estudiante1.__proto__);
}