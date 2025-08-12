export const isBalanced = (str) => {
  const stack = [];
  const map = { 
    ')': '(', 
    '}': '{', 
    ']': '['
  };
for (const char of str) {
    // pushing opening paren
    if (!map[char]){
       stack.push(char); 
       
    } else if (stack.pop() !== map[char]){ 
      // ^ checking if last opening paren in stack === map value (closing parens are map keys - map[')'] -> '(' )
        return false;
    } 
  }
  return stack.length === 0;
};

console.log(isBalanced("()[]{}")); // true
console.log(isBalanced("([{}])")); // true
console.log(isBalanced("({[)"));  // false
console.log(isBalanced("(()"));    // false
console.log(isBalanced("")); 