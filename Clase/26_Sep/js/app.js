//variables//

var arreglo = [1, 2, 3, 4, 5];
var entero = 1;
var cadena_texto = "Hola Mundo";
var booleano = true;

//Constantes//
const PI = 3.1416;

//Funciones//
function suma(x, y){
  return x + y;
}
function imprimirMensaje(mensaje){
  console.log("Este es mi mensaje" + mensaje);
}

imprimirMensaje("Hola");
imprimirMensaje("Vacaciones 1 semana :D");
imprimirMensaje(true);

suma(1,2);
suma(20,40);

//Elementos//
var botonBuscar = document.getElementById("buscar");

console.log(botonBuscar);

//Evenetos//
botonBuscar.addEventListener("click", function(){alert("Hiciste clic al boton")});
//botonBuscar.onclick

//Variables Ejercicio de clase//
var mas = document.getElementById("mas");
var verTodos = document.getElementById("bestOfTheWeek");
var verFotos = document.getElementById("seeAll")
var posts = document.getElementById("posts");
var darkModeToggle = document.getElementById("dark-mode-toggle");
var fotos = document.getElementById("fotos");


//Eventos de cada elemento//
mas.addEventListener("click", function(){
  alert("Sección en progreso...");
});

verFotos.addEventListener("click", function(){
  if(fotos.classList.contains("ocultar")){
    fotos.classList.remove("ocultar");
  } else {
    fotos.classList.add("ocultar");
  }
});

verTodos.addEventListener("click", function(){
  if(posts.classList.contains("ocultar")){
    posts.classList.remove("ocultar");
    posts.classList.add("mostrar");
  }
});

darkModeToggle.addEventListener("click", function() {
  document.body.classList.toggle('dark');
});
