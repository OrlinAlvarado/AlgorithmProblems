const wordPalindrome = (value = '') => {

  let letters = [...value];
  let inverted = letters.reverse().join("");

  if(value.toLocaleLowerCase() == inverted.toLocaleLowerCase()){
    return true;
  }

  return false;
 
  
}

function wordPalindrome2(word) {
  let lowerCasedWord = word.toLowerCase();
  let newWord = "";

  for (char of lowerCasedWord) {
    newWord = char + newWord;
  }

  if (newWord === lowerCasedWord) {
    return true;
  }
  return false;
}


console.log(wordPalindrome2("Racecar")); // true

console.log(wordPalindrome("Race car")); // false