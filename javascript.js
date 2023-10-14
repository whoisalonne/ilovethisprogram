let titulo = document.getElementById('titulo');
let claro = document.getElementById('dark');
let sup = document.getElementById('suptitulo');
let sub = document.getElementById('subtitulo');
let amor = document.getElementById('amor');
let main = document.getElementById('conteiner');
let nome = document.getElementById('nome');
let corpo = document.body;
let link = document.getElementById('link') // Necessário para fazer com que o a aninhado no li sofra o not hover devidamente
let cabeca = document.getElementById('cabeca');
let bgYborder = document.getElementById('bgYellowPlus');
let bgYellow = document.querySelectorAll('.bgYellow');
let imgContent = document.getElementById('img');
let border = document.getElementById('borderW')
let pH = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, ul'); //Adiciona as tags de 'p', 'ul', 'a' e 'h(geral)'
let github = document.getElementById('github')

let colorWhite = [titulo, link];
let bgYArray = Array.from(bgYellow);
let pHArray = Array.from(pH);

let bgBlack = [main, cabeca, corpo];// Elementos que devem ter o background brancos/pretos
let colorWhiteAll = [pHArray, colorWhite] //Elementos que devem ser brancos (especifícos, paragráfos, titulos)

claro.addEventListener('click', dark);

// Função dark e códigos de transição em arrays

function dark() {
  if (main.style.backgroundColor == "white") {

    // Percorre os arrays e aplica estilos - Esuro
    colorWhiteAll.forEach(function (item) { item.forEach(function (elemento) { elemento.style.color = 'white' }) })

    bgYArray.forEach(function (item) { item.style.backgroundColor = '#8b9aff'; })

    bgBlack.forEach(function (item) { item.style.backgroundColor = 'black'; })

    // Mudanças adicionais de estilo
    sup.style.color = "#616161";
    amor.style.color = "#6746E9";
    nome.style.color = "#b2b2b2";
    sub.style.color = "#616161";
    imgContent.style.borderColor = 'white';
    border.style.borderColor = 'white';
    github.setAttribute('src', 'img/github-logopreto.png')
    bgYborder.style.backgroundColor = '#8b9aff'
    claro.textContent = "Light";
  }
  else {

    // Percorre os arrays e aplica estilos.

    colorWhiteAll.forEach(function (item) { item.forEach(function (elemento) { elemento.style.color = 'black' }) })
    bgBlack.forEach(function (item) { item.style.backgroundColor = 'white'; })

    bgYArray.forEach(function (item) { item.style.backgroundColor = 'yellow'; item.style.color = 'black'; })

    // Mudanças adicionais de estilo.

    sup.style.color = "#b2b2b2";
    amor.style.color = "#E21F14";
    nome.style.color = "#616161";
    sub.style.color = "#616161";
    bgYborder.style.color = 'black';
    border.style.borderColor = 'black';
    imgContent.style.borderColor = 'black';
    bgYborder.style.backgroundColor = 'yellow'
    github.setAttribute('src', 'img/github-logobranco.png')
    claro.textContent = "Dark";
  }
}

titulo.addEventListener('click', topo);

  function topo() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }