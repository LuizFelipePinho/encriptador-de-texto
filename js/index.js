import { Cryptography }  from "./Cryptography.js";

const buttonEncrypt = document.getElementsByClassName("encrypt");


const getTextInput = () => {
  const textInput = document.getElementById("message");
  const cryptography = new Cryptography(textInput.value); 
  cryptography.encrypt();
  // cryptography.decrypt();
  
}


buttonEncrypt[0].addEventListener("click", getTextInput);

