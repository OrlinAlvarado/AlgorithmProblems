const hammingDistance = (word1 = '', word2 = '') => {

  if(word1.length != word2.length)
    return -1;

  word1 = word1.toLowerCase();
  word2 = word2.toLowerCase();

  let count = 0;

  for (let i = 0; i < word1.length; i++) {

    if(word1[i] !== word2[i]){
      count++;
    }
    
  }

  return count;
 
  
}

function hammingDistance2(word, matchingWord) {
  let count = 0;
  let i = 0;

  if (word.length === matchingWord.length) {
    while (i <= word.length) {
      if (word.toLowerCase()[i] !== matchingWord.toLowerCase()[i]) {
        count++;
      }
      i++;
    }

    return count;
  }
  return "unequal word lengths";
}

function hammingDistance3(word, matchingWord) {
  let count = 0;

  if (word.length === matchingWord.length) {
    for (let i = 0; i <= word.length; i++) {
      if (word.toLowerCase()[i] !== matchingWord.toLowerCase()[i]) {
        count++;
      }
    }

    return count;
  }
  return "unequal word lengths";
}

console.log(hammingDistance("part", "path")); 
console.log(hammingDistance("carrito", "cjakito")); 
console.log(hammingDistance("ebere", "samson"));