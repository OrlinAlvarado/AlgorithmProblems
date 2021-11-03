

const stringReversal = (word) => {

    console.log("Reduce: ", [...word].reduce((a, b) => b + a))
    console.log("Reverse: ", word.split("").reverse().join(""))

}

const stringReversal2 = (word) => {
    let result = '';
    for (let index = word.length - 1; index >= 0; index--) {
        const element = word[index];
        result =  result + element;
    }

    console.log('For: ', result)

}

const stringReversalForIn = (word) => {
    let result = '';
    for( let letter in word){
        //console.log(word[letter]);
        result = word[letter] + result
    }

    console.log('For in: ', result)

}

const stringReversalForOf = (word) => {
    let result = '';
    for( let letter of word){
        //console.log(letter);
        result = letter + result
    }

    console.log('For of: ', result)

}




stringReversal('Orlin alvarado')
stringReversal2('Orlin alvarado')

stringReversalForIn('Prueba')

stringReversalForOf('Prueba')

