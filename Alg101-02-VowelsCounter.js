

const vowelsCounter = (text) => {
    let counter = 0;
    const vowels = ['a', 'e', 'i', 'o', 'u'];

    for (const vowel of vowels) {
        for (let index = 0; index < text.length; index++) {
            const element = text[index];

            if(element.toLowerCase() === vowel){
                counter++;
            }
        }
    }

    return counter;

}

function vowelsCounterIncludes(text) {
    let counter = 0;
    let vowels = ["a", "e", "i", "o", "u"];

    for (let i = 0; i <= [...text].length; i++) {
      if (vowels.includes(text[i])) {
        counter++;
      }
    }

    return counter;
  }

function vowelsCounterRegex(text) {
    let regEx = /[aeiou]/gi;
    let matchedVowels = text.match(regEx);

    if (matchedVowels) {
      return matchedVowels.length;
    }

    return 0;
  }


console.log('For of y for',vowelsCounter('Murcielago'));

console.log('Includes', vowelsCounterIncludes('Murcielago'));

console.log('Regex', vowelsCounterRegex('Murcielago'));

