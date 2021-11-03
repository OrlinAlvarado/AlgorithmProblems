const wordAnagrams = (word1 = '', word2 = '') => {
  word1 = word1.toLowerCase().split(" ").join("")
  word2 = word2.toLowerCase().split(" ").join("")

  if(word1.length !== word2.length){
    return "unequal word lengths";
  }

  if([...word1].sort().join("") === [...word2].sort().join("")){
    return true;
  }
  return false;
  
}


console.log(wordAnagrams("silent", "listen")); // true

console.log(wordAnagrams("samson", "ebere")); // "unequal word lengths"

console.log(wordAnagrams("njoku", "ebere")); // false
console.log(wordAnagrams("New York Times", "monkeys write")); // true
console.log(wordAnagrams("George Bush", "He bugs Gore")); // true
