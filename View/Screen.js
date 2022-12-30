

// metodos referentes a tela como o pegar e mostra na tela o texto, além disso valida o texto
export class Screen {
  getTextInput = () => {
    const textInput = document.getElementById("message");

    return textInput.value;
  };


  setTextOut = (txt) => {
    const imgOut = document.getElementsByClassName("img-not-message");
    const messageNotFound = document.getElementsByClassName(
      "out-message-not-found"
    );

    if (imgOut[0] && messageNotFound[0]) {
      imgOut[0].style = `display: none`;
      messageNotFound[0].style = `display: none`;
    }

    const messageHelp = document.getElementsByClassName("out-message");
    messageHelp[0].className = "out-message out-message-cript";
    messageHelp[0].innerText = `${txt}`;
    messageHelp[0].style = `
     
      margin: 0;
      padding: 0;
      height: 80%
      
    `;

    const buttonCopy = document.getElementsByClassName("container-button-copy");
    buttonCopy[0].style = `
    display: flex;
    `;

    const containerOutText = document.getElementsByClassName(
      "out-message-encrypt"
    );
    containerOutText[0].style = `
    margin: 0;
    padding-top: 2em;
    display: flex; 
    justify-content: space-between;
    height: 100%;

    `;
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

    document.getElementById("clipboardCopy").addEventListener("click", clipboardCopy);
  };
}
