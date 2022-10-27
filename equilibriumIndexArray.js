
// Problem Description
// You are given an array A of integers of size N.

// Your task is to find the equilibrium index of the given array

// The equilibrium index of an array is an index such that the sum of elements at lower indexes is equal to the sum of elements at higher indexes.

// NOTE:

// Array indexing starts from 0.
// If there is no equilibrium index then return -1.
// If there are more than one equilibrium indexes then return the minimum index.



// Problem Constraints
// 1 <= N <= 105
// -105 <= A[i] <= 105


// Input Format
// First arugment is an array A .


// Output Format
// Return the equilibrium index of the given array. If no such index is found then return -1.


// Example Input
// Input 1:
// A=[-7, 1, 5, 2, -4, 3, 0]
// Input 2:

// A=[1,2,3]


// Example Output
// Output 1:
// 3
// Output 2:

// -1


// Example Explanation
// Explanation 1:
// 3 is an equilibrium index, because: 
// A[0] + A[1] + A[2] = A[4] + A[5] + A[6]
// Explanation 1:

// There is no such index.


const equiArray = (A) => {

    // Copy code from scaler...have efficient algorithm...and bookmarked enjoyalgorithms.com for efficient solutions
   
           // construct prefixSum array left
           const constructPrefixSumLeft = (A) => {
               const prefixSumL = [];
               prefixSumL[0] = A[0];
               for(let i = 1; i < A.length; i++) {
                   prefixSumL[i] = prefixSumL[i - 1] + A[i];
               }
               return prefixSumL;
           }
   
           // construct prefixSum array right
           const constructPrefixSumRight = (A) => {
               const prefixSumR = [];
               const N = A.length;
               prefixSumR[0] = A[N - 1];
               for(let i = 1; i < A.length; i++) {
                   prefixSumR[i] = prefixSumR[i - 1] + A[N - i - 1];
               }
               return prefixSumR;
           }
   
           const prefixSumL = constructPrefixSumLeft(A);
           const prefixSumR = constructPrefixSumRight(A);
           let minIdx = +Infinity;
           let count = 0;
           const leftSum = [], rightSum = [];
   
           leftSum[0] = 0;
           rightSum[A.length - 1] = 0;
   
           for(let j = 0; j < A.length; j++) {
               if(j < A.length - 1) {
                   leftSum[j + 1] = prefixSumL[j]
                   rightSum[j] = prefixSumR[A.length - j - 2]
               }
           }

           //console.log("df",leftSum, rightSum)
   
           for(let k = 0; k < A.length; k++) {
               if(leftSum[k] === rightSum[k]) {
                   if(k < minIdx)
                       minIdx = k
                   count++
               }
           }
           if(count === 0) 
               return -1
           else
               return minIdx
};

console.log(equiArray([1,2,3]));
console.log(equiArray([-7, 1, 5, 2, -4, 3, 0]));   