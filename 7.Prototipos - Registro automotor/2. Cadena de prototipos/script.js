function Libro(auto, titulo, cantPaginas){
this.autor= autor;
this.titulo= titulo;
this.cantPaginas = cantPaginas;


}
let Libro1= new Libro("Stephen", "Carrie", 524);


/*Prácticas: Cadena de Prototipos 3
Crea un constructor Futbolista, 
con las propiedades nombre, equipo
 y posicion. Y luego, dentro de la 
 función prototipos(), cree una instancia
  futbolista1 mediante el constructor antes
   definido con los siguientes datos: 
   "Lionel Messi", "PSG", "Delantero".
    Se pide que, en la misma función,
     se imprima en consola el resultado 
     de ejecutar el método valueOf() de 
     la instancia futbolista1.*/


     function Futbolista(nombre, equipo, posicion){
        this.nombre = nombre;
        this.equipo = equipo;
        this.posicion = posicion;
        }
    
    function prototipos() {
        let futbolista1 = new Futbolista("Lionel Messi", "PSG", "Delantero");
        console.log(futbolista1.valueOf());
        
        
    }