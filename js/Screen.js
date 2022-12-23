import { TextPassRequirements } from "./TextRequirements.js";


export class Screen {

  // pega o texto 
  getTextInput = () => {
    const textInput = document.getElementById("message");

    if (!TextPassRequirements(textInput.value)) {
      return false;
    }
    return textInput.value;
    
  }

  //mostra o texto na tela
  setTextOut = (txt) => {
    const imgOut = document.getElementsByClassName("img-not-message");
    const messageNotFound = document.getElementsByClassName("out-message-not-found");

    if(imgOut[0] && messageNotFound[0]) {
      imgOut[0].style = `display: none`;
      messageNotFound[0].style = `display: none`; 
    } 
    
    const messageHelp = document.getElementsByClassName("out-message");
    messageHelp[0].className = "out-message out-message-cript"
    messageHelp[0].innerText = `${txt}`;

  }
  
}