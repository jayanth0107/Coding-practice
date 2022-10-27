// Problem Description
// Given an array A, find the size of the smallest subarray such that it contains at least one occurrence of the maximum value of the array

// and at least one occurrence of the minimum value of the array.

// Problem Constraints
// 1 <= |A| <= 2000


// Input Format
// First and only argument is vector A

// Output Format
// Return the length of the smallest subarray which has at least one occurrence of minimum and maximum element of the array

// Example Input
// Input 1:

// A = [1, 3]
// Input 2:

// A = [2]


// Example Output
// Output 1:

//  2
// Output 2:

//  1


// Example Explanation
// Explanation 1:

//  Only choice is to take both elements.
// Explanation 2:

//  Take the whole array.

const closestMinMax = (A) => {
           let answer = A.length; // this can be the smallest possible worst case
   
           let min = A[0], max = A[0];
           for(let i of A) {
               min = Math.min(min, i);
               max = Math.max(max, i);
           }
   
           if(min === max) {
               return 1;
           }
   
           let minIdx = -1, maxIdx = -1, length;
           console.log("mdf",min, max)
   
           for(j = A.length - 1; j >= 0; j--) {
               
               if(A[j] === min) {
                   
                   minIdx = j;
                   if(maxIdx !== -1 && minIdx !== -1) {
                       length = Math.abs(maxIdx - minIdx) + 1
                       answer = Math.min(answer, length);
                   }
                //    console.log("ion min", length, answer, minIdx)
               }
               if(A[j] === max) {
                   maxIdx = j;
                   
                   if(maxIdx !== -1 && minIdx !== -1) {
                       length = Math.abs(maxIdx - minIdx) + 1
                       answer = Math.min(answer, length);
                   }
                //    console.log("ldsk",maxIdx, length)
                //    console.log("ion max", length, answer)
               }
           }
           return answer;
}

// console.log(closestMinMax([ 814, 761, 697, 483, 981 ]))
console.log(closestMinMax([ 343, 291, 963, 165, 152 ]))
   