import { TextPassRequirements } from "./TextRequirements.js";

export class Cryptography {
  constructor(text) {
    this.text = text;
    this.cifra = [
      {
        valor: "e",
        chave: "enter",
      },
      {
        valor: "i",
        chave: "imes",
      },
      {
        valor: "a",
        chave: "ai",
      },
      {
        valor: "o",
        chave: "ober",
      },
      {
        valor: "u",
        chave: "ufat",
      },
    ];
  }

  //`A letra "e" é convertida para "enter"`
  // `A letra "i" é convertida para "imes"`
  // `A letra "a" é convertida para "ai"`
  // `A letra "o" é convertida para "ober"`
  // `A letra "u" é convertida para "ufat"`
  encrypt = () => {
    if (!TextPassRequirements(this.text)) {
      return "Digite apenas letras minusculas e sem acento";
    }

    let textCrip = "";

    for (let i = 0; i < this.text.length; i++) {
      if (this.text[i] === "e") {
        textCrip += "enter";
      } else if (this.text[i] === "i") {
        textCrip += "imes";
      } else if (this.text[i] === "a") {
        textCrip += "ai";
      } else if (this.text[i] === "o") {
        textCrip += "ober";
      } else if (this.text[i] === "u") {
        textCrip += "ufat";
      } else {
        textCrip += this.text[i];
      }
    }
    return textCrip;
  };

  decrypt = () => {
    if (!TextPassRequirements(this.text)) {
      return "Digite apenas letras minusculas e sem acento";
    }

    let textCrip = this.text;
    this.cifra.forEach((element) => {
      textCrip = textCrip.replaceAll(element.chave, element.valor);
    });

    return textCrip;
  };
}
