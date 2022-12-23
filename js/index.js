import { Cryptography }  from "./Cryptography.js";
import { Screen } from "./Screen.js";


class Main {
  
  performEncrypt = () => {
    const screen = new Screen;
    const textInput = screen.getTextInput();
    const cryptography = new Cryptography(textInput); 
    const textInputCrypt = cryptography.encrypt();
    console.log(textInputCrypt); 
    //agora falta printa na tela

  }

  performDecrypt = () => {
    const screen = new Screen;
    const textInput = screen.getTextInput();
    const cryptography = new Cryptography(textInput); 
    const textInputCrypt = cryptography.decrypt();
    console.log(textInputCrypt); 
    //agora falta printa na tela

  }


}

const main = new Main;

const buttonEncrypt = document.getElementsByClassName("encrypt");
buttonEncrypt[0].addEventListener("click", main.performEncrypt);

const buttonDecrypt = document.getElementsByClassName("decrypt");
buttonDecrypt[0].addEventListener("click", main.performDecrypt);

  