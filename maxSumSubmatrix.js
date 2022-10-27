// Problem Description
// Given a N * M 2D matrix A. Find the maximum sum sub-matrix from the matrix A. Return the Sum.

// Problem Constraints
// 1 <= N, M <= 300
// -104 <= A[i][j] <= 104

// Input Format
// The first argument is a 2D Integer array A.

// Output Format
// Return the sum of the maximum sum sub-matrix from matrix A.

// Example Input
// Input 1:-
//     -6 -6
//    -29 -8
// A =  3 -8
//    -15  2
//     25 25
//     20 -5
// Input 2:-
// A = -17 -2
//      20 10

// Example Output
// Output 1:-
// 65
// Output 2:-
// 30

// Example Explanation
// Explanation 1:-
// The submatrix
// 25 25
// 20 -5
// has the highest submatrix sum 65.
// Explanation 2:-
// The submatrix
// 20 10
// has the highest sub matrix sum 30.

const maxSumSubmatrix = (A) => {
  let N = A.length;
  let M = A[0].length;

  let prefixSum = Array(N)
    .fill(0)
    .map((_) => Array(M));

  const kadane = (v) => {
    // Stores current and maximum sum
    let currentSubarray = v[0];
    let maxSubarray = v[0];

    // Traverse the array v
    for (let i = 1; i < v.length; i++) {
      // // Add the value of the current element
      // currSum += v[i];

      // // Update the maximum sum
      // max = Math.max(currSum, max);

      // if (currSum < 0) {
      //     currSum = 0;
      // }

      num = v[i];
      // If current_subarray is negative, throw it away. Otherwise, keep adding to it.
      currentSubarray = Math.max(num, currentSubarray + num);
      maxSubarray = Math.max(maxSubarray, currentSubarray);
    }

    console.log('kadane-', maxSubarray);
    // Return the maximum sum
    return maxSubarray;
  };

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      // Update the prefixSum
      if (j == 0) prefixSum[i][j] = A[i][j];
      else prefixSum[i][j] = A[i][j] + prefixSum[i][j - 1];
    }
  }

  console.log('prefixSum: ' + prefixSum);

  let maxSum = -Infinity;

  // Iterate for starting column
  for (let i = 0; i < M; i++) {
    // Iterate for last column
    for (let j = i; j < M; j++) {
      // To store current array elements
      let v = [];

      // Traverse every row
      for (let k = 0; k < N; k++) {
        // Store the sum of the kth row
        let el = 0;

        // Update the prefix sum
        if (i == 0) el = prefixSum[k][j];
        else el = prefixSum[k][j] - prefixSum[k][i - 1];

        // Push it in an array
        v.push(el);
      }

      console.log('row matrix', v);

      // Update the maximum overall sum
      maxSum = Math.max(maxSum, kadane(v));
    }
  }

  return maxSum;
};

// console.log(
//   maxSumSubmatrix([
//     [-17, -2],
//     [20, 10],
//   ])
// ); //30

// console.log(
//   maxSumSubmatrix([
//     [-6, -21, 27, 19, 19],
//     [0, 0, 5, -21, 19],
//     [18, -27, -2, -7, 13],
//     [-21, -17, -25, -1, 3],
//     [0, -9, -6, -16, -5],
//     [29, 9, -25, -7, -25],
//   ])
// ); //72

console.log(
  maxSumSubmatrix([
    [-6, -6],
    [-29, -8],
    [3, -8],
    [-15, 2],
    [25, 25],
    [20, -5],
  ])
); //65

console.log(
  maxSumSubmatrix([
    [-6, -13],
    [-19, -18],
  ])
);
