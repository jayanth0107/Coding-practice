// Given a binary string A. It is allowed to do at most one swap between any 0 and 1. Find and return the length of the longest consecutive 1’s that can be achieved.


// Input Format

// The only argument given is string A.
// Output Format

// Return the length of the longest consecutive 1’s that can be achieved.
// Constraints

// 1 <= length of string <= 1000000
// A contains only characters 0 and 1.
// For Example

// Input 1:
//     A = "111000"
// Output 1:
//     3

// Input 2:
//     A = "111011101"
// Output 2:
//     7

const longestOnes = (A) => {
    //sliding window approach below for flip not swap
    // let left = 0, right = 0;
    // let noOfZeroes = 1; //max no of zeros allowed to swap

    // for(right = 0; right < A.length; right++) {
    //     // if we have included 0 in the window, we reduce noOfZeroes by 1
    //     if(A.charAt(right) === '0') {
    //         noOfZeroes--;
    //     }
    //    console.log("ddf",noOfZeroes, right,left)
    //     // Negative noOfZeroes implies we have consumed maximum flips window has more than allowed zeros ,
    //     // increment left pointer by 1 to keep window size same
    //     if(noOfZeroes < 0) {
    //         console.log("idf",noOfZeroes, right,left)
    //         // If the left element to be thrown out is zero we increase k.
    //         noOfZeroes += 1 - (+A.charAt(left));
    //         left++;
    //     }
    // }
    // console.log("oddf",noOfZeroes, left, right)
    // return  right - left;


    // To count all 1's in the string
    let noOfOnes = 0;
    let maxCount = 0, temp = 0;

    for(let i = 0; i < A.length; i++) {
        if(A[i] === '1') {
            noOfOnes++;
            temp++;
        } else {
            maxCount = Math.max(temp, maxCount);
            temp = 0;
        }
    }
    maxCount = Math.max(temp, maxCount);

    // store successive 1's
    let left = Array(A.length);
    let right = Array(A.length);

    if(A[0] === '1')
        left[0] = 1
    else 
        left[0] = 0

    if(A[A.length - 1] === '1')
        right[A.length - 1] = 1
    else 
        right[A.length - 1] = 0

    // Count successive 1s from left
    for(let i = 1; i < A.length; i++) {
        if(A[i] === '1') {
            left[i] = left[i - 1] + 1 
        } 
        // If 0 then start new successive
        // one from that i
        else 
            left[i] = 0
    }

    // Count successive 1s from right
    for(let i = A.length - 2; i >= 0; i--) {
        if(A[i] === '1') {
            right[i] = right[i + 1] + 1 
        } 
        // If 0 then start new successive
        // one from that i
        else 
            right[i] = 0
    }

     for(let i = 1; i < A.length - 1; i++) {
         if(A[i] === '0') {

             let sum = left[i - 1] + right[i + 1];

             if(sum < noOfOnes) {
                 maxCount = Math.max(maxCount, sum + 1)
             } else {
                 maxCount = Math.max(maxCount, sum)
             }
         }
     }

     return maxCount;
}

console.log(longestOnes("111011101"))
console.log(longestOnes("01"))
console.log(longestOnes("11100"))
console.log(longestOnes("010100110101"))