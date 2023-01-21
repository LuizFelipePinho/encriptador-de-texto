// metodos referentes a tela como o pegar e mostra na tela o texto, além disso valida o texto
export class Screen {
  getTextInput = () => {
    const textInput = document.getElementById("message");

    return textInput.value;
  };

  setTextOut = (txt) => {

    const containerDefault = document.getElementsByClassName("container-default");
    containerDefault[0].classList.add("not-active")

    
    const containerOutText = document.getElementsByClassName("container-out-text");
    containerOutText[0].classList.remove("not-active");
    
    let outMessage = document.getElementsByClassName("new");
    outMessage[0].innerText = `${txt}`;

  };

  setFunctionButtonEncript = (func) => {
    const buttonEncrypt = document.getElementsByClassName("encrypt");
    buttonEncrypt[0].addEventListener("click", func);
  };

  setFunctionButtonDecrypt = (func) => {
    const buttonDecrypt = document.getElementsByClassName("decrypt");
    buttonDecrypt[0].addEventListener("click", func);
  };

  setFunctionButtonCopy = () => {

    async function clipboardCopy() {
      let text = document.querySelector("#out-message-copie").textContent;
      await navigator.clipboard.writeText(text);
    }

    document
      .getElementById("clipboardCopy")
      .addEventListener("click", clipboardCopy);
  };
}
