// Problem Description
// Given an integer A, generate a square matrix filled with elements from 1 to A2 in spiral order and return the generated square matrix.

// Problem Constraints
// 1 <= A <= 1000

// Input Format
// First and only argument is integer A

// Output Format
// Return a 2-D matrix which consists of the elements added in spiral order.

// Example Input
// Input 1:

// 1
// Input 2:

// 2
// Input 3:

// 5

// Example Output
// Output 1:

// [ [1] ]
// Output 2:

// [ [1, 2], [4, 3] ]
// Output 2:

// [ [1, 2, 3, 4, 5], [16, 17, 18, 19, 6], [15, 24, 25, 20, 7], [14, 23, 22, 21, 8], [13, 12, 11, 10, 9] ]

// Example Explanation
// Explanation 1:

// Only 1 is to be arranged.
// Explanation 2:

// 1 --> 2
//       |
//       |
// 4<--- 3
// Explanation 3:
// https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/007/629/original/SS.png?1658222084

const generateSprialMatrix = (A) => {
  let count = 1;

  let left = 0,
    right = A - 1;
  let top = 0,
    bottom = A - 1;

  let result = [];
  for (let x = 0; x < A; x++) {
    result.push([]);
  }

  console.log('chk', result, right);

  while (left <= right) {
    for (let i = left; i <= right; i++) {
      result[top][i] = count;
      count++;
    }

    top++;

    for (let j = top; j <= bottom; j++) {
      result[j][right] = count;
      count++;
    }

    right--;

    for (let k = right; k >= left; k--) {
      result[bottom][k] = count;
      count++;
    }

    bottom--;

    for (let l = bottom; l >= top; l--) {
      result[l][left] = count;
      count++;
    }

    left++;
  }

  return result;
};

console.log(generateSprialMatrix(5));
