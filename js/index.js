import { Cryptography } from "./Cryptography.js";
import { Screen } from "./Screen.js";

class Main {
  constructor() {
    this.screen = new Screen();
    this.cryptography = new Cryptography();
  }

  performEncrypt = () => {
    const textInput = this.screen.getTextInput();

    if (!textInput) {
      this.screen.setTextOut("Digite apenas letras minusculas e sem acento");
    } else {
      this.cryptography.setText(textInput);
      const textInputCrypt = this.cryptography.encrypt();
      this.screen.setTextOut(textInputCrypt);
    }
  };

  performDecrypt = () => {
    const textInput = this.screen.getTextInput();

    if (!textInput) {
      this.screen.setTextOut("Digite apenas letras minusculas e sem acento");
    } else {
      const textInputCrypt = this.cryptography.decrypt();
      this.screen.setTextOut(textInputCrypt);
    }
  };
}

const main = new Main();

const buttonEncrypt = document.getElementsByClassName("encrypt");
buttonEncrypt[0].addEventListener("click", main.performEncrypt);

const buttonDecrypt = document.getElementsByClassName("decrypt");
buttonDecrypt[0].addEventListener("click", main.performDecrypt);

async function clipboardCopy() {
  let text = document.querySelector("#out-message-copie").textContent;
  await navigator.clipboard.writeText(text);
}

document.getElementById('clipboardCopy').addEventListener('click', clipboardCopy);

 
