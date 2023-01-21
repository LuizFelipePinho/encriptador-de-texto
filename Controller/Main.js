import { Cryptography } from "../Model/Cryptography.js";
import { ValidText } from "../Model/ValidText.js";
import { Screen } from "../View/Screen.js";

class Main {
  constructor() {
    this.screen = new Screen();
    this.cryptography = new Cryptography();
    this.validText = new ValidText();
  }

  performEncrypt = () => {
    const resultValid = this.validText.validRequirements(
      this.screen.getTextInput()
    );

    if (!resultValid.passad) {
      this.screen.setTextOut(resultValid.message);
    } else {
      this.cryptography.setText(resultValid.message);
      const textInputCrypt = this.cryptography.encrypt();
      this.screen.setTextOut(textInputCrypt);
    }
  };

  performDecrypt = () => {
    const resultValid = this.validText.validRequirements(
      this.screen.getTextInput()
    );

    if (!resultValid.passad) {
      this.screen.setTextOut(resultValid.message);
    } else {
      this.cryptography.setText(resultValid.message);
      const textInputCrypt = this.cryptography.decrypt();
      this.screen.setTextOut(textInputCrypt);
    }
  };

  inicialize = () => {
    this.screen.setFunctionButtonEncript(this.performEncrypt);
    this.screen.setFunctionButtonDecrypt(this.performDecrypt);
    this.screen.setFunctionButtonCopy();
  };
}

const main = new Main();
main.inicialize();
