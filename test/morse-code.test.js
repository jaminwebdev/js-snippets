import { describe, it, expect } from 'vitest';
import { decodeMorse, decodeMorseRegex, anotherDecodeMorse } from '../problems/morse-code.js';

const testCases = [
  { description: 'a simple sentence', input: '.... . -.--   .--- ..- -.. .', expected: 'HEY JUDE' },
  { description: 'the special SOS code', input: '...---...', expected: 'SOS' },
  { description: 'a single character', input: '-', expected: 'T' },
  { description: 'a single word', input: '--. .. --. .--.',
    expected: 'GIGP' },
  { description: 'a sentence with punctuation', input: '.-.-.-   --..--   ..--..', expected: '. , ?' },
  { description: 'input with leading and trailing whitespace', input: '   .... . .-.. .-.. ---   ', expected: 'HELLO' },
];

describe('decodeMorse', () => {
  testCases.forEach(({ description, input, expected }) => {
    it(`should correctly decode ${description}`, () => {
      expect(decodeMorse(input)).toBe(expected);
    });
  });
});

describe('decodeMorseRegex', () => {
  testCases.forEach(({ description, input, expected }) => {
    it(`should correctly decode ${description}`, () => {
      expect(decodeMorseRegex(input)).toBe(expected);
    });
  });
});

describe('anotherDecodeMorse', () => {
  testCases.forEach(({ description, input, expected }) => {
    it(`should correctly decode ${description}`, () => {
      expect(anotherDecodeMorse(input)).toBe(expected);
    });
  });
});
