
let titulo = document.getElementById('titulo');
let claro = document.getElementById('dark');
let loveTxt = document.getElementById('love-txt');
let blogTxt = document.getElementById('blog-txt');
let sup = document.getElementById('suptitulo');
let sub = document.getElementById('subtitulo');
let amor = document.getElementById('amor');
let main = document.getElementById('conteiner');
let nome = document.getElementById('nome');
let corpo = document.body;
let cabeca = document.getElementById('cabeca');
let ul = document.getElementById('lista-cabeca');
let link = document.getElementById('link')
let paragrafos = document.querySelectorAll('p');
let bgYborder = document.getElementById('bgYellowPlus');
let bgYellow = document.querySelectorAll('.bgYellow');
let imgContent = document.getElementById('img');


let pArray = Array.from(paragrafos);
let bgYArray = Array.from(bgYellow);

let colorWhite = [loveTxt, blogTxt, titulo, ul, link];
let bgBlack = [main, cabeca, corpo];

claro.addEventListener('click', dark);

// Função dark e códigos de transição em arrays

function dark() {
  if (main.style.backgroundColor == "white") {

    // Percorre os arrays e aplica estilos - Esuro
    for (var i = 0; i <= colorWhite.length - 1; i++) {
      colorWhite[i].style.color = 'white';
    }

    for (var i = 0; i <= pArray.length - 1; i++) {
      pArray[i].style.color = 'white'
    }

    for (var i = 0; i <= bgYArray.length - 1; i++) {
      bgYArray[i].style.backgroundColor = '#8b9aff';
    }
    for (var i = 0; i <= bgBlack.length - 1; i++) {
      bgBlack[i].style.backgroundColor = 'black';

      // Mudanças adicionais de estilo
      sup.style.color = "#616161";
      amor.style.color = "#6746E9";
      nome.style.color = "#b2b2b2";
      sub.style.color = "#616161";
      imgContent.style.borderColor = 'white';

      bgYborder.style.backgroundColor = '#8b9aff'
      claro.textContent = "Light";
    }
  } else {

    // Percorre os arrays e aplica estilos
    for (var i = 0; i <= colorWhite.length - 1; i++) {

      colorWhite[i].style.color = 'black';
    }
    for (var i = 0; i <= pArray.length - 1; i++) {
      pArray[i].style.color = 'black'
    }
    for (var i = 0; i <= bgBlack.length - 1; i++) {
      bgBlack[i].style.backgroundColor = 'white';
    }

    for (var i = 0; i <= bgYArray.length - 1; i++) {
      bgYArray[i].style.color = 'black';
      bgYArray[i].style.backgroundColor = 'yellow';

      // Mudanças adicionais de estilo
      sup.style.color = "#b2b2b2";
      amor.style.color = "#E21F14";
      nome.style.color = "#616161";
      sub.style.color = "#616161";
      bgYborder.style.color = 'black';

      imgContent.style.borderColor = 'black';
      bgYborder.style.backgroundColor = 'yellow'
      claro.textContent = "Dark";
    }
  }

  titulo.addEventListener('click', topo);

  function topo() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}

