// Problem Description
// Find the contiguous non-empty subarray within an array, A of length N, with the largest sum.

// Problem Constraints
// 1 <= N <= 1e6
// -1000 <= A[i] <= 1000

// Input Format
// The first and the only argument contains an integer array, A.

// Output Format
// Return an integer representing the maximum possible sum of the contiguous subarray.

// Example Input
// Input 1:

//  A = [1, 2, 3, 4, -10]
// Input 2:

//  A = [-2, 1, -3, 4, -1, 2, 1, -5, 4]

// Example Output
// Output 1:

//  10
// Output 2:

//  6

// Example Explanation
// Explanation 1:

//  The subarray [1, 2, 3, 4] has the maximum possible sum of 10.
// Explanation 2:

//  The subarray [4,-1,2,1] has the maximum possible sum of 6.

const maxSumContinuousSubarray = (A) => {
  let currentSubarray = A[0],
    maxSubarray = A[0];
  let num;

  // Start with the 2nd element since we already used the first one.
  for (let i = 1; i < A.length; i++) {
    num = A[i];
    // If current_subarray is negative, throw it away. Otherwise, keep adding to it.
    currentSubarray = Math.max(num, currentSubarray + num);
    maxSubarray = Math.max(maxSubarray, currentSubarray);
  }

  return maxSubarray;
};

console.log(maxSumContinuousSubarray([1, 2, 3, 4, -10]));
console.log(maxSumContinuousSubarray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
