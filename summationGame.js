// Problem Description

// Write a program to find sum all Natural numbers from 1 to N where you have to take N as input from user



// Problem Constraints

// 1 <= N <= 1000



// Input Format

// A single line representing N



// Output Format

// A single integer showing sum of all Natural numbers from 1 to N



// Example Input

// Input 1:

// 5
// Input 2:

// 10


// Example Output

// Output 1:

// 15
// Output 2:

// 55

// YOUR CODE GOES HERE
// Please take input and print output to standard input/output (stdin/stdout)
// DO NOT USE ARGUMENTS FOR INPUTS
process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input = '';

process.stdin.on('data', function(inputStdin) {
    input += inputStdin;
});

process.stdin.on('end', function() {
    input = input.split('\n');

    main();
});

function main() {
    console.log("df",input);
    let N = +input[0]
    console.log(N * (N + 1) / 2)
}