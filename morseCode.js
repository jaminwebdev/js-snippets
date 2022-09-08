// given a dictionary of morse code (MORSE_CODE)
// implement a function that would take the morse code as input and return a decoded human-readable string

const decodeMorse = (morseCode) => {
    function decodeMorseLetter(letter) {
        return MORSE_CODE[letter];
    }
    function decodeMorseWord(word) {
        return word.split(' ').map(decodeMorseLetter).join('');
    }
    return morseCode.trim().split('   ').map(decodeMorseWord).join(' ');
}

const decodeMorseRegex = (morseCode) => {
    return morseCode
    .trim()
    .split(/  | /)
    .map( (code) => MORSE_CODE[code] || ' ')
    .join('');
}

const anotherDecodeMorse = (morseCode) => {
    const phraseSplit = morseCode.split('   ')
    const splitAndDecoded = phraseSplit.map(word => word.split(' ').map(code => MORSE_CODE[code]).join(''))
    return splitAndDecoded.join(' ').trim()
  }