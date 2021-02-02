let icones = [
  { url: "./icones/usuario.png" },
  { url: "./icones/search.png" },
  { url: "./icones/carrinho.png" },
];

function Navbar() {
  let nav = document.querySelector("#navbar");
  let secaoDiv = document.createElement("div");
  secaoDiv.classList.add("logo");
  icone(nav, secaoDiv);
  logo(nav, secaoDiv);
  menus(nav);
}
Navbar();

function logo(nav, div) {
  let textoLogo = document.createElement("span");
  textoLogo.innerText = "selfcare";
  div.appendChild(textoLogo);
  nav.appendChild(div);
}

function icone(nav, div) {
  let imagem = document.createElement("img");
  imagem.setAttribute("src", "./icones/vector.png");
  div.appendChild(imagem);
  nav.appendChild(div);
}

function menus(nav) {
  let lista = document.createElement("ul");
  lista.classList.add("menus");
  nav.appendChild(lista);
  criarItem(lista);
}

function criarItem(lista) {
  icones.forEach((element) => {
    let li = document.createElement("li");
    let icon = document.createElement("img");
    icon.setAttribute("src", `${element.url}`);
    li.appendChild(icon);
    lista.appendChild(li);
  });
}
