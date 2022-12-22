import { Cryptography }  from "./Cryptography.js";

const buttonEncrypt = document.getElementsByClassName("encrypt");


const getTextInput = () => {
  const textInput = document.getElementById("message");
  const cryptography = new Cryptography(textInput.value); 
 
  // console.log(cryptography.encrypt());
  
  console.log(cryptography.decrypt());
}


buttonEncrypt[0].addEventListener("click", getTextInput);

