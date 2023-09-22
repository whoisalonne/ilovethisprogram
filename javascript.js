let criador = window.document.getElementById("webmaster");


criador.addEventListener('mouseover', mudar);
function mudar() { criador.textContent = "Alonne" };

let titulo = document.getElementById('titulo');
let claro = document.getElementById('dark');
let loveTxt = document.getElementById('love-txt');
let blogTxt = document.getElementById('blog-txt');
let sup = document.getElementById('suptitulo');
let sub = document.getElementById('subtitulo');
let amor = document.getElementById('amor');
let main = document.getElementById('frontend');
let nome = document.getElementById('nome');
let corpo = document.body;
let cabeca = document.getElementById('cabeca');

let colorWhite = [loveTxt, blogTxt, titulo, ul];
let bgBlack = [main, cabeca, corpo];

claro.addEventListener('click', dark);

function dark() {
  if (main.style.backgroundColor == "white") {

    // Percorre os arrays e aplica estilos
    for (var i = 0; i < colorWhite.length; i++) {
      colorWhite[i].style.color = 'white';
      bgBlack[i].style.backgroundColor = 'black';

      // Mudanças adicionais de estilo
      sup.style.color = "#616161";
      amor.style.color = "#6746E9";
      nome.style.color = "#b2b2b2";
      sub.style.color = "#616161";
      claro.textContent = "Light";
    }
  } else {

    // Percorre os arrays e aplica estilos
    for (var i = 0; i < colorWhite.length; i++) {
      colorWhite[i].style.color = 'black';
      bgBlack[i].style.backgroundColor = 'white';

      // Mudanças adicionais de estilo
      sup.style.color = "#b2b2b2";
      amor.style.color = "#E21F14";
      nome.style.color = "#616161";
      sub.style.color = "#616161";
      claro.textContent = "Dark";
    }
  }
}
