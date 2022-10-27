// Problem Description

// You are given an integer N you need to print all the Armstrong Numbers between 1 to N.

// If sum of cubes of each digit of the number is equal to the number itself, then the number is called an Armstrong number.

// For example, 153 = ( 1 * 1 * 1 ) + ( 5 * 5 * 5 ) + ( 3 * 3 * 3 ).



// Problem Constraints

// 1 <= N <= 500



// Input Format

// First and only line of input contains an integer N.



// Output Format

// Output all the Armstrong numbers in range [1,N] each in a new line.



// Example Input

// Input 1:

//  5
// Input 2:

//  200


// Example Output

// Output 1:

// 1
// Output 2:

// 1
// 153


// Example Explanation

// Explanation 1:

// 1 is an armstrong number.
// Explanation 2:

// 1 and 153 are armstrong number under 200.

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
  // Use console.log to output the result
  let N = +inputString[0]
  for(let i = 1; i <= N; i++) {
    //console.log("dkfl",i)
    let unitsPlace = i % 10;
    let tensPlace = (Math.floor(i / 10 )) % 10;
    let hundredsPlace = Math.floor(i / 100);
    if( unitsPlace ** 3 + tensPlace ** 3 + hundredsPlace ** 3 === i) {
        console.log(i);
    } 
  }
}