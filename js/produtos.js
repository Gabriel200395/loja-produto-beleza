let arrayProdutos = [
  {
    url: "./img/produto1.png",
    notaB: "R$",
    text: "Lorem ipsum dolor sit",
    preco: "50,00",
  },
  {
    url: "./img/produto2.png",
    notaB: "R$",
    text: "Lorem ipsum dolor sit",
    preco: "50,00",
  },
  {
    url: "./img/produto3.png",
    notaB: "R$",
    text: "Lorem ipsum dolor sit",
    preco: "50,00",
  },
  {
    url: "./img/produto4.png",
    notaB: "R$",
    text: "Lorem ipsum dolor sit",
    preco: "50,00",
  },
  {
    url: "./img/produto5.png",
    notaB: "R$",
    text: "Lorem ipsum dolor sit",
    preco: "50,00",
  },
  {
    url: "./img/produto6.png",
    notaB: "R$",
    text: "Lorem ipsum dolor sit",
    preco: "50,00",
  },
  {
    url: "./img/produto7.png",
    notaB: "R$",
    text: "Lorem ipsum dolor sit",
    preco: "50,00",
  },
  {
    url: "./img/produto8.png",
    notaB: "R$",
    text: "Lorem ipsum dolor sit",
    preco: "50,00",
  },
  {
    url: "./img/produto9.png",
    notaB: "R$",
    text: "Lorem ipsum dolor sit",
    preco: "50,00",
  },
];

function produtos() {
  let secaoProdutos = document.querySelector("#produtos");
  let secaoDiv = document.createElement("div");
  secaoDiv.classList.add("informacao-produtos");
  texto(secaoProdutos, secaoDiv);
  addProdutosDom(secaoProdutos);
}
produtos();

function texto(secaoProdutos, secaoDiv) {
  let promacao = document.createElement("span");
  promacao.innerText = "Promoção";

  let quantidade = document.createElement("h3");
  quantidade.innerText = "9 produtos";

  secaoDiv.appendChild(promacao);
  secaoDiv.appendChild(quantidade);

  secaoProdutos.appendChild(secaoDiv);
}

function addProdutosDom(secaoProdutos) {
  let main = document.createElement("main");
  main.classList.add("card-produtos");
  secaoProdutos.appendChild(main);

  arrayProdutos.forEach((element) => {
    //div principal
    let card = document.createElement("div");

    //div secundaria
    let informacaoValor = document.createElement("pre");

    let imgProduto = document.createElement("img");
    imgProduto.setAttribute("src", `${element.url}`);

    let texto = document.createElement("p");
    texto.innerText = `${element.text}`;

    let valor = document.createElement("span");
    valor.innerText = `${element.preco}`;

    let notaB = document.createElement("strong");
    notaB.innerText = `${element.notaB}`;

    informacaoValor.appendChild(notaB);
    informacaoValor.appendChild(valor);

    card.appendChild(imgProduto);
    card.appendChild(texto);
    card.appendChild(informacaoValor);
    main.appendChild(card);
  });
}

function Dom(seletor, el) {
  const elementos = document.querySelectorAll(`${(seletor, el)}`);
  this.elementos = elementos;

  this.addClasse = function (classe) {
    elementos.forEach((item) => {
      item.classList.add(classe);
    });
  };
}

const dom = new Dom(".card-produtos", "div");
dom.addClasse("card");

const imagem = new Dom(".card", "img");
imagem.addClasse("imagem");

const inforUsuario = new Dom(".card", "pre");
inforUsuario.addClasse("info-usuario-produto");

const textoProduto = new Dom(".card", "p");
textoProduto.addClasse("texto-produto");
