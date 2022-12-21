// Deve funcionar apenas com letras minúsculas
// - Não devem ser utilizados letras com acentos nem caracteres especiais

// retorna true se passar em todos os requisitos  
export const TextPassRequirements = (text) => {
  let regex =/^[A-ZáàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ.,~!@#$%&*)({}_']+$/
  let textArr = text.split('');
  const existTextInvalid = textArr.find(element => regex.test(element));
  return existTextInvalid ? false : true;

}
  