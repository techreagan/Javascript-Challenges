// Execirse 2: Reverse String
// Write a program that prints all numbers from 1 to 100, for multiples of 3 i.e divisible by 3, print out "Fizz", instead of the number, for multiplies of 5 print "Buzz". For numbers     which are multiplies of both 3 and 5, i.e divisible by both number print "FizzBuzz"

function fizzBuzz() {
  let output = 0;
  for(let i = 1; i <= 100; i++) {
    if(i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

const result = fizzBuzz();
console.log(result);