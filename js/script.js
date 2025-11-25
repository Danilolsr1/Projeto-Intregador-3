
const botao = document.querySelector("button");
const titulo = document.querySelector(".titulo-contato span");

if (botao && titulo) {
  botao.onclick = function () {
    titulo.innerHTML = "📨 Mensagem enviada com sucesso!";
    titulo.style.color = "green";
    document.body.style.backgroundColor = "#e0ffe0"; 
  };
}

const campo = document.querySelector("#nome");
const mensagem = document.createElement("p");

if (campo) {
  mensagem.id = "saudacao";
  mensagem.style.color = "yellow";
  mensagem.style.fontWeight = "bold";
  mensagem.style.textAlign = "center";
  mensagem.style.marginTop = "10px";
  campo.insertAdjacentElement("afterend", mensagem);

  campo.oninput = function () {
    mensagem.innerHTML = "Olá, " + campo.value + "! Seja bem-vindo(a) ao Tatico Brasília!";
  };
}

const imagem = document.querySelector(".banner");

if (imagem) {
  imagem.onmouseover = function () {
    imagem.style.opacity = "0.7";
    imagem.style.border = "5px solid yellow";
    imagem.style.transform = "scale(1.05)";
    imagem.style.transition = "all 0.3s ease";
  };

  imagem.onmouseout = function () {
    imagem.style.opacity = "1";
    imagem.style.border = "none";
    imagem.style.transform = "scale(1)";
  };
}



