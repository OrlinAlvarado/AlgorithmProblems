const sentenceCapitalization = (value = '') => {

  let words = value.split(' ');
  let result = '';

  for (const word of words) {
    result += word.substring(0,1).toUpperCase() + word.substring(1, word.length).toLocaleLowerCase() + ' ';
  }

  return result;
  
}

function sentenceCapitalization2(sentence) {
  let capitalizedSentence = [];

  sentence
    .toLowerCase()
    .split(" ")
    .forEach(element => {
      let fistElement = element[0].toUpperCase();
      let splicedElement = element.slice(1);

      capitalizedSentence.push(fistElement + splicedElement);
    });

  return capitalizedSentence.join(" ");
}

console.log(sentenceCapitalization('njoku')); // "Njoku"

console.log(sentenceCapitalization('njoku samson ebere')); // "Njoku Samson Ebere"

console.log(sentenceCapitalization2('njoku samson ebere')); 