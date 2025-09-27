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

// --- ELEMENTOS ---
var botonBuscar = document.getElementById("buscar");
var buscarInput = document.getElementById("buscarInput");
var tarjetas = document.querySelectorAll(".tarjeta");

var likeBtn = document.getElementById("likes");
var likeCount = document.getElementById("likeCount");
var count = 0;

var verTodos = document.getElementById("bestOfTheWeek");
var posts = document.getElementById("posts");
var verFotos = document.getElementById("seeAll");
var fotos = document.getElementById("fotos");
var darkModeToggle = document.getElementById("dark-mode-toggle");

var seeAll = document.getElementById("seeAll");
var seeAllImage = document.getElementById("seeAllImage");
var galeria = document.querySelectorAll("#fotos img");


// --- FUNCIONES ---

// 1. Buscador de artículos
function buscarArticulos() {
  var searchTerm = buscarInput.value.toLowerCase().trim();

  tarjetas.forEach(function (tarjeta) {
    var texto = tarjeta.textContent.toLowerCase();

    if (searchTerm === "" || texto.includes(searchTerm)) {
      tarjeta.classList.remove("ocultar");
    } else {
      tarjeta.classList.add("ocultar");
    }
  });
}

// 2. Contador de Likes
function sumarLike() {
  count = count + 1;
  likeCount.textContent = count;
}

// Mostrar/Ocultar fotos
function toggleFotos() {
  fotos.classList.toggle("ocultar");
}

// Mostrar/Ocultar posts
function togglePosts() {
  posts.classList.toggle("ocultar");
}

// 3. Cambiar a modo oscuro
function toggleDarkMode() {
  document.body.classList.toggle("dark");
}

// 4. Galería con hover
var seeAll = document.getElementById("seeAll");
var seeAllImage = document.getElementById("seeAllImage");

var imagenes = [
  "img/flores.jpg",
  "img/soundtrap-n30_i7mx62o-unsplash.jpg",
  "img/alpes.jpg",
  "img/arnel-hasanovic-MNd-Rka1o0Q-unsplash.jpg",
  "img/travel.jpg",
  "img/tren.jpg"
];


var index = 0;
var intervalId = null;

seeAll.addEventListener("mouseover", function() {
  intervalId = setInterval(function() {
    index++;
    if (index >= imagenes.length) {
      index = 0; // reinicia
    }
    seeAllImage.src = imagenes[index];
  }, 2000);
});

seeAll.addEventListener("mouseout", function() {
  clearInterval(intervalId);
});



// --- EVENTOS ---
if (botonBuscar) {
  botonBuscar.addEventListener("click", buscarArticulos);
}

if (likeBtn) {
  likeBtn.addEventListener("click", sumarLike);
}

if (verFotos) {
  verFotos.addEventListener("click", toggleFotos);
}

if (verTodos) {
  verTodos.addEventListener("click", togglePosts);
}

if (darkModeToggle) {
  darkModeToggle.addEventListener("click", toggleDarkMode);
}

if (seeAll) {
  seeAll.addEventListener("mouseover", startGallery);
  seeAll.addEventListener("mouseout", stopGallery);
}
