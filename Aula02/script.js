// class Personagem {
//   posX;
//   posY;
//   passo = 5;

//   move(posX = 0, posY = 0) {
//     document.addEventListener("keydown", (e) => {
//       switch (e.key) {
//         case "ArrowDown":
//           if (posY < 370) {
//             posY += this.passo;
//             personagem.style.top = posY + "px";
//             personagem.style.backgroundPosition = "0px 0px";
//           }
//           break;
//         case "ArrowUp":
//           if (posY > 0) {
//             posY -= this.passo;
//             personagem.style.top = posY + "px";
//             personagem.style.backgroundPosition = "0px 0px";
//           }
//           break;

//         case "ArrowRight":
//           if (posX < 568) {
//             posX += this.passo;
//             personagem.style.left = posX + "px";
//             personagem.style.backgroundPosition = "0px 0px";
//           }
//           break;

//         case "ArrowLeft":
//           if (posX > 0) {
//             posX -= this.passo;
//             personagem.style.left = posX + "px";
//             personagem.style.backgroundPosition = "0px 0px";
//           }
//           break;
//       }
//     });
//   }
// }

// const p1 = new Personagem();
// p1.move();

class Personagem {
  // atributos
  elemento;
  passo = 5;
  posX = 0;
  posY = 0;

  // construtor
  constructor(nome) {
    this.elemento = document.getElementById(nome);
    this.atualizarTela();
  }

  // constructor() {
  // this.elemento = document.getElementById("personagem");

  // }
  // métodos
  atualizarTela() {
    this.elemento.style.left = this.posX + "px";
    this.elemento.style.top = this.posY + "px";
  }
  // Método de posição aleatório
  novaPosicao() {
    this.elemento.style.left = Math.floor(Math.random() * 550) + "px";
    this.elemento.style.top = Math.floor(Math.random() * 350) + "px";
  }
  mover(direcao) {
    switch (direcao) {
      case "cima":
        this.posY -= this.passo;
        break;

      case "baixo":
        this.posY += this.passo;

        break;
      case "direita":
        this.posX += this.passo;

        break;

      case "esquerda":
        this.posX -= this.passo;

        break;
    }

    this.atualizarTela();
  }
}
// Instanciando um objeto do tipo Personagem
const personagem1 = new Personagem("personagem");
const personagem2 = new Personagem("inimigo");
const tela = document.getElementById("container");

document.addEventListener("DOMContentLoaded", (e) => {
  tela.style.background.color = "red";
});
personagem1.novaPosicao();
personagem2.novaPosicao();

document.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "ArrowUp":
      personagem1.mover("cima");
      break;

    case "ArrowDown":
      personagem1.mover("baixo");
      break;

    case "ArrowLeft":
      personagem1.mover("esquerda");
      break;

    case "ArrowRight":
      personagem1.mover("direita");
      break;

    case "w":
      personagem2.mover("cima");
      break;

    case "s":
      personagem2.mover("baixo");
      break;

    case "a":
      personagem2.mover("esquerda");
      break;

    case "d":
      personagem2.mover("direita");
      break;

    default:
      break;
  }
});
