// Problem Description
// Given a 2D integer matrix A of size N x N, find a B x B submatrix where B<= N and B>= 1, such that the sum of all the elements in the submatrix is maximum.

// Problem Constraints
// 1 <= N <= 103.

// 1 <= B <= N

// -102 <= A[i][j] <= 102.

// Input Format
// First arguement is an 2D integer matrix A.

// Second argument is an integer B.

// Output Format
// Return a single integer denoting the maximum sum of submatrix of size B x B.

// Example Input
// Input 1:

//  A = [
//         [1, 1, 1, 1, 1]
//         [2, 2, 2, 2, 2]
//         [3, 8, 6, 7, 3]
//         [4, 4, 4, 4, 4]
//         [5, 5, 5, 5, 5]
//      ]
//  B = 3
// Input 2:

//  A = [
//         [2, 2]
//         [2, 2]
//     ]
//  B = 2

// Example Output
// Output 1:

//  48
// Output 2:

//  8

// Example Explanation
// Explanation 1:

//     Maximum sum 3 x 3 matrix is
//     8 6 7
//     4 4 4
//     5 5 5
//     Sum = 48
// Explanation 2:

//  Maximum sum 2 x 2 matrix is
//   2 2
//   2 2
//   Sum = 8

const maxSumSquareSubmatrix = (A, B) => {
  let N = A.length;

  const preprocess = (A, N) => {
    // sum[i][j] represents sum from (0,0) to (i,j)
    let sum = Array(N)
      .fill(0)
      .map((_) => Array(N));
    sum[0][0] = A[0][0];

    //preprocess the first row
    for (let j = 1; j < A[0].length; j++) {
      sum[0][j] = A[0][j] + sum[0][j - 1];
    }

    //preprocess the first column
    for (let i = 1; i < A.length; i++) {
      sum[i][0] = A[i][0] + sum[i - 1][0];
    }

    //preprocess the rest of matrix
    for (let i = 1; i < A.length; i++) {
      for (let j = 1; j < A[0].length; j++) {
        sum[i][j] = sum[i][j - 1] + sum[i - 1][j] - sum[i - 1][j - 1] + A[i][j];
      }
    }

    return sum;
  };

  //preprocess the matrix to calculate prefix sum
  let sum = preprocess(A, N);

  let total = -Infinity,
    maxSum = -Infinity;
  let bottomRightX, bottomRightY;

  console.log('prefix sum matrix -', sum);

  // find the maximum sum submatrix
  // start from cell (B-1, B-1) and consider each submatrix of size `B × B`
  for (let i = B - 1; i < N; i++) {
    for (let j = B - 1; j < N; j++) {
      // (i, j) is the bottom-right corner coordinates of the
      // square submatrix of size `B`
      total = sum[i][j];
      if (i - B >= 0) {
        total = total - sum[i - B][j];
      }
      if (j - B >= 0) {
        total = total - sum[i][j - B];
      }
      if (i - B >= 0 && j - B >= 0) {
        total = total + sum[i - B][j - B];
      }

      if (total > maxSum) {
        maxSum = total;
        bottomRightX = i;
        bottomRightY = j;
      }
    }
  }

  console.log('total -', total, maxSum, bottomRightX, bottomRightY);

  let result = 0,
    submatrixRow = [];
  // get maximum sum submatrix
  for (let i = 0; i < B; i++) {
    submatrixRow = [];
    for (let j = 0; j < B; j++) {
      let r = i + bottomRightX - B + 1;
      let c = j + bottomRightY - B + 1;
      submatrixRow.push(A[r][c]);
      result += A[r][c];
    }
  }

  return result;
};

console.log(
  maxSumSquareSubmatrix(
    [
      [1, 1, 1, 1, 1],
      [2, 2, 2, 2, 2],
      [3, 8, 6, 7, 3],
      [4, 4, 4, 4, 4],
      [5, 5, 5, 5, 5],
    ],
    3
  )
);

console.log(
  maxSumSquareSubmatrix(
    [
      [2, 2],
      [2, 2],
    ],
    2
  )
);
