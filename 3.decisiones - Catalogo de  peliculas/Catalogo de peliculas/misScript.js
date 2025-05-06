function recomendar(categoria){
    let edad = document.getElementById("textoEdad").value;
    let peliculas = document.getElementById("textoPeliculas");


    switch(categoria){

case "romance":
//codigo
if(edad < 13){
peliculas.textContent = "peliculas para menores de 13 , de romance"


}else{
if(edad < 16){

peliculas.textContent = "recomendacion peliculas de romance +13"

    }else{
  
     peliculas.textContent = "Recomendacion peliculas de romance +16"
            

        }


    }

break;


case "drama":
//codigo:
if(edad < 13){
    peliculas.textContent = "peliculas para menores de 13 de drama "
    
    
    }else{
    if(edad < 16){
    
    peliculas.textContent = "recomendacion peliculas de drama  +13"
    
        }else{
        
         peliculas.textContent = "Recomendacion peliculas de drama +16"
                
    
            }
    
    
        }
break;


case "comedia":
//codigo
if(edad < 13){
    peliculas.textContent = "peliculas para menores de 13 de comedia"
    
    
    }else{
    if(edad < 16){
    
    peliculas.textContent = "recomendacion peliculas de comedia +13"
    
        }else{
        
         peliculas.textContent = "Recomendacion peliculas de comedia +16"
                
    
            }
    
    
        }
break;


case "accion":
//codigo
if(edad < 13){
    peliculas.textContent = "peliculas para menores de 13 accion"
    
    
    }else{
    if(edad < 16){
    
    peliculas.textContent = "recomendacion peliculas de accion +13"
    
        }else{
      
         peliculas.textContent = "Recomendacion peliculas de accion +16"
                
    
            }
    
    
        }
break;


}




}