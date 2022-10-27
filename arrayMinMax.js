// Problem Description

// Write a program to print maximum and minimum elements of the input array A of size N where you have to take integer N and other N elements as input from the user.



// Problem Constraints

// 1 <= N <= 1000

// 1 <= A <= 1000



// Input Format

// A single line representing N followed by N integers of the array A



// Output Format

// A single line containing two space separated integers representing maximum and minimum elements of the input array.



// Example Input

// Input 1:

// 5 1 2 3 4 5
// Input 2:

// 4 10 50 40 80


// Example Output

// Output 1:

// 5 1
// Output 2:

// 80 10


process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function main() {
  // Write your code here
  let max = -Infinity;
  let min = +Infinity;

  let stringArray = inputString[0].substring(inputString[0].indexOf(" "))
  let array = stringArray.split(" ").filter(Number).map(Number);
//   console.log(inputString, stringArray, array, inputString[0].indexOf(" "))
  // Use console.log to output the result
  for(let i of array) {
      if(i > max) {
          max = i;
      }
      if(i < min) {
          min = i
      }
  }
  console.log(max, min)
}