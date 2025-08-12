export const isBalanced = (str) => {
  const stack = [];
  const characters = { 
    ')': '(', 
    '}': '{', 
    ']': '['
  };
for (const char of str) {
      
    if (!characters[char]){
       stack.push(char); 
    } 
    else if (stack.pop() !== characters[char]){
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