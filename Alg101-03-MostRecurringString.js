const mostRecurringChar = (value = '') => {
  let max = 0;
  let maxChar = '';

  for (let i = 0; i < value.length; i++) {
    let count = 0;
    const char = value[i];
    
    for(let current of value){
      if(char === current){
        count++;
      }
    }

    if(count > max){
      max = count;
      maxChar = char;
    }
    
  }

  console.log({ maxChar, max})


}

function mostRecurringChar2(text) {
  let charMap = {};
  let maxValue = 0;
  let maxKey = "";

  for (char of text) {
    if (charMap.hasOwnProperty(char)) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  }

  for (char in charMap) {
    if (charMap[char] > maxValue) {
      maxValue = charMap[char];
      maxKey = char;
    }
  }

  return maxKey;
}

mostRecurringChar("samson");
mostRecurringChar("njoku samson ebere");
console.log(mostRecurringChar2("njoku samson ebere"));