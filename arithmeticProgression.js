// Problem Description
// Given an integer array A of size N. Return 1 if the array can be arranged to form an arithmetic progression, otherwise return 0.

// A sequence of numbers is called an arithmetic progression if the difference between any two consecutive elements is the same.

// Problem Constraints
// 2 <= N <= 105

// -109 <= A[i] <= 109

// Input Format
// The first and only argument is an integer array A of size N.

// Output Format
// Return 1 if the array can be rearranged to form an arithmetic progression, otherwise return 0.

// Example Input
// Input 1:

//  A = [3, 5, 1]
// Input 2:

//  A = [2, 4, 1]

// Example Output
// Output 1:

//  1
// Output 2:

//  0

// Example Explanation
// Explanation 1:

//  We can reorder the elements as [1,3,5] or [5,3,1] with differences 2 and -2 respectively, between each consecutive elements.
// Explanation 2:

//  There is no way to reorder the elements to obtain an arithmetic progression.

const ap = (A) => {
  if (A.length < 3) return 1;

  A.sort((a, b) => a - b);
  let difference = A[1] - A[0];
  for (let i = 2; i < A.length; i++) {
    let currentDifference = A[i] - A[i - 1];
    if (currentDifference !== difference) return 0;
  }

  return 1;
};

console.log(ap([2, 4, 1]));
console.log(ap([3, 5, 1]));
console.log(
  ap([
    1, 39, 324, 267, 96, 77, 248, 58, 229, -18, 191, 172, 134, 286, 305, 210,
    115, 20, 153,
  ])
);
