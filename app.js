// Un sistema web esta compuesto por tres elementos:
// CSS
// HTML
// JavasCript

// Selectores: es la forma en que js selecciona elementos.  

// Funcion de intentoDeUsuario
// La funacion es un encapsulamiento de una accion que queremos que haga. 

let numeroSecreto = 0;
let intentos = 0; 
let listaNumerosSorteados = []; 
let numeroMaximo = 10;

console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return; 
}

function verificarIntento(){
   let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value); // Tenemos una sola funcion para poder hacer dos cosas a la vez. 
   
   if (numeroDeUsuario === numeroSecreto) {
      asignarTextoElemento('p', `Acertaste el numero en ${intentos} intentos`);
      document.getElementById('reiniciar').removeAttribute('disabled');
   } else {
      if (numeroDeUsuario > numeroSecreto) {
         asignarTextoElemento('p', 'El numero secreto es menor');
      } else {
         asignarTextoElemento('p', 'El numero secreto es mayor')
      }
      intentos++;
      limpiarCaja();
   }
   return;
}

function limpiarCaja(){
  document.querySelector('#valorUsuario').value = '';
  
}

// Con la funcion generarNumeroSecreto vamos a lograr que se vayan guardando
// los numeros que van saliendo para adivinar en el juego. Una vez que se usaron todos
// nos encontramos con un problema ya que entramos en bucle infinito. Tenemos que resolverlo. 
// Para resolver nuestro problema vamos a crear una variable llamada numeroMaximo.
// Podemos resolver este problema de muchas formas pero en este caso vamos a buscar q



function generarNumeroSecreto() {
     let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

     // Ya sorteamos todos los numeros?

     if (listaNumerosSorteados.length == numeroMaximo) {
      asignarTextoElemento('p', 'Ya se sortearon todos los numeros posibles'); 
     } else {
         
     }

     // Si el numero generado esta incluido en la lista

     if (listaNumerosSorteados.includes(numeroGenerado)) {
        return generarNumeroSecreto(); 
     } else {
      listaNumerosSorteados.push(numeroGenerado);
      return numeroGenerado;
    }

}

function condicionesInicicales(){
   asignarTextoElemento('h1', 'Juego del numero secreto!'); 
   asignarTextoElemento('p', `Indica un numero del uno al ${numeroMaximo}`); 
   numeroSecreto = generarNumeroSecreto(); 
   intentos = 1;

}

function reiniciarJuego(){
   // Limpiar la caja 
   limpiarCaja();
   // Indicar mensaje de intervalo de numeros
   // Generar el numero aleatorio
   // Inicializar el numero de intentos
   condicionesInicicales(); 
   // Deshabilitar el boton de nuevo juego
   document.querySelector("#reiniciar").setAttribute("disabled", "true");


}

condicionesInicicales();


