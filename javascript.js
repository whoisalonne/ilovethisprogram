// Variavéis globais representando artifícios da página.

let titulo = document.getElementById('titulo');
let claro = document.getElementById('dark');
let sup = document.getElementById('suptitulo');
let sub = document.getElementById('subtitulo');
let amor = document.getElementById('amor');
let main = document.getElementById('conteiner');
let nome = document.getElementById('nome');
let corpo = document.body;
let cabeca = document.getElementById('cabeca');
let bgYborder = document.getElementById('bgYellowPlus');
let bgYellow = document.querySelectorAll('.bgYellow');
let imgContent = document.getElementById('img');
let border = document.getElementById('borderW');
let loading = document.getElementById('loading');
let pH = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, ul'); //Adiciona as tags de 'p', 'ul' e 'h(geral)'

//Variavéis globais representando as imagens da página

let github = document.getElementById('github');
let linkedin = document.getElementById('linkedin');


//Variavéis globais representando o sistema de transição de nomes do titulo

let nomes = ['LOVE', 'AMO', "J'AIME", 'SUKI'];
let contador = 0

//Conjunto de variavéis globais representando arrays

let colorWhite = [titulo];
let bgYArray = Array.from(bgYellow);
let pHArray = Array.from(pH);

let bgBlack = [main, cabeca, corpo];// Elementos que devem ter o background brancos/pretos
let colorWhiteAll = [pHArray, colorWhite] //Elementos que devem ser brancos (especifícos, paragráfos, titulos)

// Função dark e códigos de transição em arrays

claro.addEventListener('click', dark);

function dark() {
  if (main.style.backgroundColor == "white") {

    // Percorre os arrays e aplica estilos - Esuro
    colorWhiteAll.forEach((item) => { item.forEach((elemento) => { elemento.style.color = 'white' }) })

    bgYArray.forEach((item) => { item.style.backgroundColor = '#8b9aff'; })

    bgBlack.forEach((item) => { item.style.backgroundColor = 'black'; })

    // Mudanças adicionais de estilo
    sup.style.color = "#616161";
    amor.style.color = "#6746E9";
    nome.style.color = "#b2b2b2";
    sub.style.color = "#616161";
    imgContent.style.borderColor = 'white';
    border.style.borderColor = 'white';
    loading.style.color = "#b2b2b2";
    github.setAttribute('src', 'img/github-logopreto.png')
    linkedin.setAttribute('src', 'img/linkedin-logopreto.png')
    bgYborder.style.backgroundColor = '#8b9aff'
    claro.textContent = "Light";
  }

  else {

    // Percorre os arrays e aplica estilos.

    colorWhiteAll.forEach((item) => { item.forEach((elemento) => { elemento.style.color = 'black' }) })
    bgBlack.forEach((item) => { item.style.backgroundColor = 'white'; })

    bgYArray.forEach((item) => { item.style.backgroundColor = 'yellow'; item.style.color = 'black'; })

    // Mudanças adicionais de estilo.

    sup.style.color = "#b2b2b2";
    amor.style.color = "#E21F14";
    nome.style.color = "#616161";
    sub.style.color = "#616161";
    bgYborder.style.color = 'black';
    border.style.borderColor = 'black';
    imgContent.style.borderColor = 'black';
    loading.style.color = "#616161";
    bgYborder.style.backgroundColor = 'yellow'
    github.setAttribute('src', 'img/github-logobranco.png')
    linkedin.setAttribute('src', 'img/linkedin-logobranco.png')
    claro.textContent = "Dark";
  }
}

//Função necessária para scrollar ao topo qunado clicado no titulo (ILTP)

titulo.addEventListener('click', topo);

function topo() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

//Função necessária para atualização do ano no copyright (footer)

setInterval(() => {
  let data = document.getElementById('data');
  let get = new Date().getFullYear()
  data.innerText = get;
}, 1000)


//Sistema de transição entre os nomes do titulo

setInterval(() => {
  contador += 1;
  if (contador == 4) {
    contador = 0;
  }

  // Atualiza o título com base no contador
  amor.innerText = nomes[Number(contador)];
}, 5000);