// Problem Description

// You are given N positive integers.

// For each given integer A, you have to tell whether it is a perfect number or not.

// Perfect number is a positive integer which is equal to the sum of its proper positive divisors.

// Problem Constraints

// 1 <= N <= 10

// 1 <= A <= 106

// Input Format

// First line of the input contains a single integer N.

// Each of the next N lines contains a single integer A.

// Output Format

// In a seperate line, print YES if a given integer is perfect, else print NO.

// Example Input

// Input 1:

//  2
//  4
//  6
// Input 2:

//  1
//  3

// Example Output

// Output 1:

//  NO
//  YES
// Output 2:

//  NO

// Example Explanation

// Explanation 1:

//  For A = 4, the answer is "NO" as sum of its proper divisors = 1 + 2 = 3, is not equal to 4.
//  For A = 6, the answer is "YES" as sum of its proper divisors = 1 + 2 + 3 = 6, is equal to 6.
// Explanation 2:

//  For A = 3, the answer is "NO" as sum of its proper divisors = 1, is not equal to 3.

// Please take input and print output to standard input/output (stdin/stdout)
// DO NOT USE ARGUMENTS FOR INPUTS
process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input = '';

process.stdin.on('data', function (inputStdin) {
  input += inputStdin;
  console.log('received ' + inputStdin);
});

process.stdin.on('readable', function () {
  while ((chunk = process.stdin.read()) !== null) {
    process.stdout.write(`data: ${chunk}`);
    input = input.split('\n');
  }
  main();
});

function main() {
  console.log('df', input, input[0]);
  let inputNumber;
  let sum = 0;
  for (let i = 1; i < input.length - 1; i++) {
    inputNumber = +input[i];
    sum = 0;
    for (let j = 1; j < inputNumber; j++) {
      if (inputNumber % j === 0) sum += j;
    }
    if (sum === inputNumber) console.log('YES');
    else console.log('NO');
  }
}
