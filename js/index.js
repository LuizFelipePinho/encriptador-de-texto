import { Cryptography }  from "./Cryptography.js";

const buttonEncrypt = document.getElementsByClassName("encrypt");


const getTextInput = () => {
  const textInput = document.getElementById("message");
  const cryptography = new Cryptography(textInput.value); 
  // cryptography.encrypt();
  console.log(cryptography.encrypt());
}


buttonEncrypt[0].addEventListener("click", getTextInput);

