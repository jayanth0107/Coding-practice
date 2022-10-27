// Problem Description

// Given an integer array **A** and an integer **B**, you have to print the same array after rotating it **B** times towards the right.
// NOTE: You can use extra memory.

// Problem Constraints

// 1 <= |A| <= 106

// 1 <= A[i] <= 109

// 1 <= B <= 109

// Input Format

// The first line begins with an integer A denoting the length of an array, and then A integers represent the array elements.
// The second line contains a single integer B

// Output Format

// Print an array of integers which is the **Bth** right rotation of input array **A**, on a separate line.
// Example Input

// Input 1:
//  4 1 2 3 4
//  2
// Input 2:

//  3 1 2 2
//  3
// Example Output

// Output 1:
//  3 4 1 2

// Output 2:
//  1 2 2
// Example Explanation

// Explanation 1:
//  [1,2,3,4] => [4,1,2,3] => [3,4,1,2]
// Explanation 2:

//  [1,2,2] => [2,1,2] => [2,2,1] => [1,2,2]  

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    main();    
});

function readline() {
    return inputString[currentLine++];
}

// Two pointer approach
const reverseWithIdx = (array, startIdx, endIdx) => {
    let temp;
    while(startIdx < endIdx) {
        //swap
        temp = array[startIdx];
        array[startIdx] = array[endIdx];
        array[endIdx] = temp;

        startIdx++;
        endIdx--;
    }
}

function main() {
    // code here
    let stringArray = inputString[0].substring(inputString[0].indexOf(" "));
    const array = stringArray.split(" ").filter(Number).map(Number);
    const N = array.length;
    const noOfRotations = +inputString[1] % N; // mod N because after N rotations rotated array will be same as input array

    if(noOfRotations > 0) {
        reverseWithIdx(array, 0, array.length - 1); // reverse entire array
        reverseWithIdx(array, 0, noOfRotations - 1); // reverse noOfRotations in reversed array
        reverseWithIdx(array, noOfRotations, array.length - 1); // reverse remaining elements in reversed array to get the result
    }

    console.log(array.join(" ") + " "); // Using join method with separator to convert array to string, extra space as expected output contains space at last
}
