import { TextPassRequirements } from "./TextRequirements.js";


export class Screen {

  // pega o texto 
  getTextInput = () => {
    const textInput = document.getElementById("message");

    if (!TextPassRequirements(textInput.value)) {
      return "Digite apenas letras minusculas e sem acento";
    }
    return textInput.value;
    
  }

  //mostra o texto na tela
  setTextOut = (txt) => {
    const findOutput = document.getElementsByClassName("out-message");
    console.log(findOutput[0]);
  }
  
}