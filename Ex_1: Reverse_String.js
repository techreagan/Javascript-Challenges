// Execirse 1: Reverse String
// E.g. reverse string 'javascript' - 'tpircsavaj'

// Solution One
function reverseString(str) {
  return str.split('').reverse().join('');
}

const result = reverseString('javascript');
console.log(result);