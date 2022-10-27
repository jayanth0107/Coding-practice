// Write a program to input an integer T and then each of T lines will have 2 strings (A and B).

// You have to concatenate two strings and print T lines each containing concatenated string.

// First line is T which means number of test cases.

// Each next T lines contain two strings A and B.

// INPUT

// 3
// sc scaler
// ler scalem
// scaler scale

// OUTPUT:

// 3
// scscaler
// lerscalem
// scalerscale


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
    console.log(`${input[0]} `); //Prints the the number of lines of strings in output
    for(let i = 1; i < input.length; i++) {
        console.log(`${input[i].replace(/ /g, '')}`)
    }
}
