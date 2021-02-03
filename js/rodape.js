function Rodape(seletor, el, text) {
  const buscar = document.querySelector(seletor);
  this.buscar = buscar;

  const criarElemento = document.createElement(el);
  this.criarElemento = criarElemento;

  const texto = document.createTextNode(text);
  this.texto = texto;

  // adicionar os elementos
  this.addElemento = function () {
    buscar.appendChild(criarElemento);
  };
  //adicionar classe nos Elementos
  this.addClasse = function (classe) {
    criarElemento.classList.add(classe);
  };

  this.textoElement = function () {
    criarElemento.appendChild(texto);
  };
}

//primeira div criada na section
const rodape = new Rodape("#rodape", "div");
rodape.addElemento();
rodape.addClasse("primeira-div");

const addElementoPrimeiraDiv = new Rodape(".primeira-div", "ul");
addElementoPrimeiraDiv.addElemento();
addElementoPrimeiraDiv.addClasse("itens-rodape");

const contato = new Rodape(".itens-rodape", "li", "Contato");
contato.addElemento();
contato.textoElement();

const termos = new Rodape(".itens-rodape", "li", "Termos de seviço");
termos.addElemento();
termos.textoElement();

const politica = new Rodape(".itens-rodape", "li", "Política de privacidade");
politica.addElemento();
politica.textoElement();

const Cancelamento = new Rodape(
  ".itens-rodape",
  "li",
  "Cancelamento, troca e reembolso"
);
Cancelamento.addElemento();
Cancelamento.textoElement();

// segunda div criada na section
const addNovaDiv = new Rodape("#rodape", "div");
addNovaDiv.addElemento();
addNovaDiv.addClasse("segunda-div");

const newsletter = new Rodape(".segunda-div", "p", "Newsletter");
newsletter.addElemento();
newsletter.textoElement();

const divForm = new Rodape(".segunda-div", "div");
divForm.addElemento();
divForm.addClasse("form");

const input = new Rodape(".form", "input");
input.addElemento();

const button = new Rodape(".form", "button", "inscrever");
button.addElemento();
button.textoElement();

document.querySelector("input").placeholder = "Digite seu melhor e-mail";
