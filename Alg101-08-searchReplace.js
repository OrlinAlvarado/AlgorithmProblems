const searchAndReplace = (sentence = '', originalWord = '', replacement = '') => {
  
  return sentence.replace(originalWord, replacement);
}

function searchAndReplace2(string, word, replacement) {
  return string.split(word).join(replacement);
}

function searchAndReplace3(string, word, replacement) {
  let stringArray = string.split(" ");

  stringArray.map(element => {
    element === word
      ? (stringArray[stringArray.indexOf(word)] = replacement)
      : element;
  });

  return stringArray.join(" ");
}

console.log(searchAndReplace("Njoku Samson Plenty", "Plenty", "Ebere")); // 'Njoku Samson Ebere'
console.log(searchAndReplace2("Njoku Samson Plenty and Samson ni", "Samson", "Ebere")); // 'Njoku Samson Ebere'
console.log(searchAndReplace3("Njoku Samson Plenty and Samson ni", "Samson", "Ebere")); // 'Njoku Samson Ebere'
