const anagramFns = require('./anagram');

test('sortAnagram racecar v carrace anagram', () => {
    expect(anagramFns.sortAnagram('racecar', 'carrace')).toBe(true)
})

test('sortAnagram anagram failure with nonsensical words', () => {
    expect(anagramFns.sortAnagram('wiwy', 'broomstick')).toBe(false)
})

test('validAnagram racecar v carrace anagram', () => {
    expect(anagramFns.validAnagram('racecar', 'carrace')).toBe(true)
})

test('validAnagram anagram failure with nonsensical words', () => {
    expect(anagramFns.validAnagram('wiwy', 'broomstick')).toBe(false)
})