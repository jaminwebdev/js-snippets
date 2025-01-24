import { describe, it, expect } from 'vitest'
import { validAnagram, sortAnagram } from '../anagram'

describe('testing sort anagrams', () => {
  it('should be a valid anagram', () => {
    expect(sortAnagram('racecar', 'carrace')).toBe(true)
  })

  it('should not be a valid anagram', () => {
    expect(sortAnagram('wiwy', 'broomstick')).toBe(false)
  })
})

describe('hashmap anagram', () => {
  it('should be a valid anagram', () => {
    expect(validAnagram('racecar', 'carrace')).toBe(true)
  })

  it('should not be a valid anagram', () => {
    expect(validAnagram('wiwy', 'broomstick')).toBe(false)
  })
})