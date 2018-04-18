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

// Solution Three
function reverseString3(str) {
  let reverseString = '';
  str.split('').forEach(function(char) {
    reverseString = char + reverseString; 
  });
  return reverseString;
}

const result = reverseString3('javascript');
console.log(result);