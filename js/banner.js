function banner() {
  let secaoBanner = document.querySelector("#banner");
  let banner = document.createElement("img");
  banner.setAttribute("src", "./img/banner.png");
  banner.style.width = "100%";
  secaoBanner.appendChild(banner);
}

banner();
