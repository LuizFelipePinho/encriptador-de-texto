import { Cryptography } from "../Model/Cryptography.js";
import { Screen } from "../View/Screen.js";
// o controller é o cara que vai juntar o model com view 


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
      this.cryptography.setText(textInput);
      const textInputCrypt = this.cryptography.decrypt();
      this.screen.setTextOut(textInputCrypt);
    }
  };


  inicialize = () => {
    this.screen.setFunctionButtonEncript(this.performEncrypt);
    this.screen.setFunctionButtonDecrypt(this.performDecrypt);
    this.screen.setFunctionButtonCopy();
  }

}

const main = new Main();
main.inicialize();




 
