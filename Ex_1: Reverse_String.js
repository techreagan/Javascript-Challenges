// Execirse 1: Reverse String
// E.g. reverse string 'javascript' - 'tpircsavaj'

// Solution One
function reverseString(str) {
  return str.split('').reverse().join('');
}

// Solution Two
function reverseString2(str) {
  let reverseString = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reverseString += str[i];
  }
  return reverseString;
}

const result = reverseString('javascript');
console.log(result);