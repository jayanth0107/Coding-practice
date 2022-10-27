// Given an array of integers A, find and return whether the given array contains a non-empty subarray with a sum equal to 0.

// If the given array contains a sub-array with sum zero return 1, else return 0.

// Problem Constraints
// 1 <= |A| <= 100000

// -10^9 <= A[i] <= 10^9

// Input Format
// The only argument given is the integer array A.

// Output Format
// Return whether the given array contains a subarray with a sum equal to 0.

// Example Input
// Input 1:

//  A = [1, 2, 3, 4, 5]
// Input 2:

//  A = [-1, 1]

// Example Output
// Output 1:

//  0
// Output 2:

//  1

// Example Explanation
// Explanation 1:

//  No subarray has sum 0.
// Explanation 2:

//  The array has sum 0.

const subArrayZeroSum = (A) => {
  let currentSum = 0;
  let hashmap = new Map();

  hashmap.set(0);
  for (let i = 0; i < A.length; i++) {
    currentSum += A[i];

    console.log('df', currentSum);
    if (hashmap.has(currentSum)) {
      return 1;
    } else {
      hashmap.set(currentSum);
    }
  }
  return 0;
};

console.log(
  subArrayZeroSum([
    96, -71, 18, 66, -39, -32, -16, -83, -11, -92, 55, 66, 93, 5, 50, -45, 66,
    -28, 69, -4, -34, -87, -32, 7, -53, 33, -12, -94, -80, -71, 48, -93, 62,
  ])
);
