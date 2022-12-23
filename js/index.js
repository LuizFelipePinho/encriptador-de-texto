import { Cryptography }  from "./Cryptography.js";
import { Screen } from "./Screen.js";


class Main {
  
  performEncrypt = () => {
    const screen = new Screen;
    const textInput = screen.getTextInput();

    if(!textInput) {
      // chamar a função de printar na tela com essa mensagem
      screen.setTextOut("Digite apenas letras minusculas e sem acento");

    } else {
      const cryptography = new Cryptography(textInput); 
      const textInputCrypt = cryptography.encrypt();
      //agora falta printar na tela passando como parametro o texto criptografado
      screen.setTextOut(textInputCrypt);
    }
  }

  performDecrypt = () => {
    
    const screen = new Screen;
    const textInput = screen.getTextInput();

    if(!textInput) {
      // chamar a função de printar na tela com essa mensagem
      console.log("Digite apenas letras minusculas e sem acento");
    } else {
      const cryptography = new Cryptography(textInput); 
      const textInputCrypt = cryptography.decrypt();
      //agora falta printar na tela passando como parametro o texto criptografado
      screen.setTextOut(textInputCrypt);
    
    }

  }

  
}

const main = new Main;

const buttonEncrypt = document.getElementsByClassName("encrypt");
buttonEncrypt[0].addEventListener("click", main.performEncrypt);

const buttonDecrypt = document.getElementsByClassName("decrypt");
buttonDecrypt[0].addEventListener("click", main.performDecrypt);

  