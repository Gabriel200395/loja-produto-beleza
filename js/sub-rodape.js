function subRodape() {
  let secaoSection = document.querySelector("#sub-rodape");

  let div1 = document.createElement("div");
  div1.classList.add("primeiros-icones");

  let div2 = document.createElement("div");
  div2.classList.add("form-de-pagamento");

  secaoSection.appendChild(div1);
  secaoSection.appendChild(div2);

  iconesPrimeiraDiv(div1);
  iconesSegundaDiv(div2);
}

subRodape();
function iconesPrimeiraDiv(div1) {
  let iconeMidia = document.createElement("img");
  iconeMidia.setAttribute("src", "./img/icones.png");
  div1.appendChild(iconeMidia);
}

function iconesSegundaDiv(div2) {
  let iconeMidia = document.createElement("img");
  iconeMidia.setAttribute("src", "./img/forma-pg.png");
  div2.appendChild(iconeMidia);
}
