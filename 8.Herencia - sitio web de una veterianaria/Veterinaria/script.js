class Animal{
    constructor(nombre, peso, edad){
      this.nombre = nombre;
      this.peso = peso;
      this.edad = edad;
      
        }

    informacion(){
       
      return `Nombre: ${this.nombre}, Peso: ${this.peso} kg, Edad: ${this.edad} años`;
      

    }    
     }
    
   class Perro extends Animal{
    constructor(nombre, peso, edad, raza){
        super(nombre,peso, edad);
        this.raza = raza;


    }
informacion(){
       
      return `Nombre: ${this.nombre}, Peso: ${this.peso} kg, Edad: ${this.edad} años  ${this.raza}`;
    }

   }
   class Conejo extends Animal{
    constructor(nombre, peso, edad, color ){
        super(nombre,peso, edad);
        this.color = color;


    }
    informacion(){
       
      return `Nombre: ${this.nombre}, Peso: ${this.peso} kg, Edad: ${this.edad} años ${this.color}`;}


   }

   class Gato extends Animal{
    constructor(nombre, peso, edad, sexo ){
        super(nombre,peso, edad);
        this.sexo = sexo;


    }
informacion(){
       
      return `Nombre: ${this.nombre}, Peso: ${this.peso} kg, Edad: ${this.edad} años ${this.sexo}`;}

   }
   

let miPerro = new Perro("Rex", 15, 5, "Labrador");
let miConejo = new Conejo("Bugs", 2, 3, "Blanco");
let miGato = new Gato("Luna", 4, 2, "Hembra");

animales =[miPerro, miConejo, miGato];

     
function mostrarInfo(){
 
    let tabla = document.getElementById("tabla");

    for(let animal of animales ){
     let lista = document.createElement("li");
     lista.textContent = animal.informacion();
     tabla.appendChild(lista);
    

    }



}




