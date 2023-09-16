var criador = window.document.getElementById("webmaster");


criador.addEventListener('mouseover', mudar);
function mudar() { criador.textContent = "Alonne" };

var titulo = document.getElementById('titulo');
var claro = document.getElementById('dark');
var loveTxt = document.getElementById('love-txt');
var blogTxt = document.getElementById('blog-txt');
var sup = document.getElementById('suptitulo');
var sub = document.getElementById('subtitulo');
var amor = document.getElementById('amor');
var main = document.getElementById('frontend');
var nome = document.getElementById('nome');
var corpo = document.body;

claro.addEventListener('click', dark);

function dark() { 
    if (main.style.backgroundColor == "white") { 
    
      loveTxt.style.color = "white";
      blogTxt.style.color = "white";
      sup.style.color = "#616161";
      amor.style.color = "#6746E9";
      nome.style.color = "#b2b2b2";
      sub.style.color = "#616161";
      main.style.backgroundColor = "#040404";
      header.style.backgroundColor = "#000000";
      ul.style.color = "white";
      titulo.style.color = "white"; 
      claro.textContent = "Light";
      corpo.style.backgroundColor = "black";

    } else { 
      loveTxt.style.color = "black";
      blogTxt.style.color = "black";
      sup.style.color = "#b2b2b2";
      amor.style.color = "#E21F14";
      nome.style.color = "#616161";
      sub.style.color = "#616161";
      main.style.backgroundColor = "white";
      header.style.backgroundColor = "white";
      ul.style.color = "black";
      titulo.style.color = "black"; 
      claro.textContent = "Dark";
      corpo.style.backgroundColor = "";
    }
  }
  