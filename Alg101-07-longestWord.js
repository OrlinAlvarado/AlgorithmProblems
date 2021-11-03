const longestWord = (sentence = '') => {
  let words= sentence.split(' ');
  let max = 0;
  let maxWord = '';

  words.forEach(word => {
    if(word.length > max){
      max = word.length;
      maxWord = word;
    }
  })

  return maxWord;
  
}

function longestWord2(sentence) {
  return sentence.split(" ").sort((word, nextWord) => nextWord.length - word.length)[0];
}

console.log(longestWord("Njoku Samson Ebere")); // Samson

console.log(longestWord2("Find the longest word")); // longest
console.log(longestWord("Find the longest word Murcielago")); // Murcielago
console.log(longestWord("Murcielago Find the longest word")); // Murcielago