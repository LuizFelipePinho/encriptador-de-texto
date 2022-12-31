// retorna true se passar em todos os requisitos

export class TextRequirements {
  testRegex = (text) => {
    let regex = /^[A-ZáàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ.,~!@#$%&*)({}_']+$/;
    let textArr = text.split("");
    const existTextInvalid = textArr.find((element) => regex.test(element));
    return existTextInvalid ? false : true;
  };
}
