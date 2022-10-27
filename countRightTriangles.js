// Problem Description
// Given two arrays of integers A and B of size N each, where each pair (A[i], B[i]) for 0 <= i < N represents a unique point (x, y) in 2D Cartesian plane.

// Find and return the number of unordered triplets (i, j, k) such that (A[i], B[i]), (A[j], B[j]) and (A[k], B[k]) form a right-angled triangle with the triangle having one side parallel to the x-axis and one side parallel to the y-axis.

// NOTE: The answer may be large so return the answer modulo (109 + 7).

// Problem Constraints
// 1 <= N <= 105

// 0 <= A[i], B[i] <= 109

// Input Format
// The first argument given is an integer array A.
// The second argument given is the integer array B.

// Output Format
// Return the number of unordered triplets that form a right angled triangle modulo (109 + 7).

// Example Input
// Input 1:

//  A = [1, 1, 2]
//  B = [1, 2, 1]
// Input 2:

//  A = [1, 1, 2, 3, 3]
//  B = [1, 2, 1, 2, 1]

// Example Output
// Output 1:

//  1
// Output 2:

//  6

// Example Explanation
// Explanation 1:

//  All three points make a right angled triangle. So return 1.
// Explanation 2:

//  6 triplets which make a right angled triangle are:    (1, 1), (1, 2), (2, 2)
//                                                        (1, 1), (3, 1), (1, 2)
//                                                        (1, 1), (3, 1), (3, 2)
//                                                        (2, 1), (3, 1), (3, 2)
//                                                        (1, 1), (1, 2), (3, 2)
//                                                        (1, 2), (3, 1), (3, 2)

const countRightTriangles = (A, B) => {
  // Count of frequency hashmap of x-coordinates A
  // Count of frequency hashmap of y-coordinates B
  // Result = Sum of (freq of selected X-coord - 1) * (freq of selected Y-coord - 1)

  let freqMapX = new Map();
  let freqMapY = new Map();

  // for (let i = 0; i < A.length; i++) {
  //   freqMapX.set(A[i], ~~freqMapX.get(A[i]) + 1);
  // }

  // for (let i = 0; i < B.length; i++) {
  //   freqMapY.set(B[i], ~~freqMapY.get(B[i]) + 1);
  // }

  for (let num of A) {
    console.log('chkl', num);
    freqMapX.set(num, ~~freqMapX.get(num) + 1);
  }

  for (let num of B) {
    console.log('chksdfl', num);
    freqMapY.set(num, ~~freqMapY.get(num) + 1);
  }

  let answer = 0;
  console.log('freqmaps-', freqMapX, freqMapY);

  for (let i = 0, j = 0; i < A.length && j < B.length; i++, j++) {
    answer += (freqMapX.get(A[i]) - 1) * (freqMapY.get(B[j]) - 1);
  }

  return answer % (10 ** 9 + 7);
};

console.log(countRightTriangles([1, 1, 2], [1, 2, 1]));
