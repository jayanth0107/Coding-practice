
// Problem Description

// Given an integer A, you have to tell whether it is a prime number or not.

// A prime number is a natural number greater than 1 which is divisible only by 1 and itself.



// Problem Constraints

// 1 <= A <= 10^6



// Input Format

// First and only line of the input contains a single integer A.



// Output Format

// Print YES if A is a prime, else print NO.



// Example Input

// Input 1:

//  3 
// Input 2:

//  4 


// Example Output

// Output 1:

//  YES 
// Output 2:

//  NO 

// Example Explanation

// Explanation 1:

//  3 is a prime number as it is only divisible by 1 and 3.
// Explanation 2:

//  4 is not a prime number as it is divisible by 2.



// Please take input and print output to standard input/output (stdin/stdout)
// DO NOT USE ARGUMENTS FOR INPUTS
process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    input += inputStdin;
});

process.stdin.on('end', function() {
    input = input.split('\n');

    main();
});

function main() {
    let count = 0;
    let inputNumber = +input[0];
    for(let i = 1; i * i <= inputNumber; i++) {
        if(inputNumber % i === 0) {
            if(i * i === inputNumber)
                count++
            count += 2;
        }
    }
    if(count === 2) 
        console.log("YES")
    else 
        console.log("NO")
}