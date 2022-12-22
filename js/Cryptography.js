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

  encrypt = () => {
    if (!TextPassRequirements(this.text)) {
      return "Digite apenas letras minusculas e sem acento";
    }

    let textCrip = this.text;
    this.cifra.forEach((element) => {
      textCrip = textCrip.replaceAll(element.valor, element.chave);
    });

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
