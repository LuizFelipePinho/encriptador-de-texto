// essa classa valida se o texto passa em todos os requisitos 

// essa classe deve receber um texto e fazer as validações caracteres, retorne um objeto com true se passou com o texto que foi validado, caso nãom retorne false com o texto do que deveria receber como input  

import { TextRequirements } from "./TextRequirements.js"

export class ValidText {
  constructor() {
    this.textRequirements = new TextRequirements()
  }

  validRequirements = (text) => {
    const passRequirements = this.textRequirements.testRegex(text);

    let resultValid = {
      passad: passRequirements,
      message: text,
    }

    if(!passRequirements) {
      resultValid.message = "Digite apenas letras minusculas, sem acento ou sem caracteres especais";
    } 

    return resultValid;

  };




}