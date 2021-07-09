/*
atletas
crear un arreglo para guardar los nombres
otro para su tiempo
determinar el ganador
*/
let atletas = []
;
let tiempo = []
;
let cantidad = parseInt(window.prompt("Escribe la cantidad de atletas"));

for (var i = 0; i < cantidad; i++) 
{
    
atletas[i] = window.prompt("Escribe el nombre del atleta " + (i+1));
    
tiempo[i] = parseInt(window.prompt("Escribe el tiempo que tardó " + (i+1)));

}
var posicion=0;
for (var i = 1; i < cantidad; i++) 
{
    
if(tiempo[i]<tiempo[posicion]){
posicion=i;
			      }

}
   document.write("El ganador es el atleta : " +atletas[posicion] + " con un tiempo de " + tiempo[posicion]);
