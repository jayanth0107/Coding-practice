// Problem Description

// There is a rectangular field with two types of resources viz, resource A and resource B. At each cell in the field, both of the resources can be present. There are two types of factory which can collect resource A and B. If resource A is collected in a factory then resource B is lost and vice versa. Now, these two factories are located perpendicular to each other i.e the factory collecting resource A is at the top ( north) of the rectangular field and the factory collecting resource B is to the left ( west) of the rectangular field. The resources have to be brought to the factory on a straight path without taking any turns. This implies that if there is any south-north conveyer belt in the cell, but the cell north of it contains an east-west conveyer belt, then all resources transported on the south-north conveyer belt will be lost.

// You have to design a conveyer belt system that maximizes the total amount of minerals mined, i.e the sum of the amount of resource A transported to the top and the sum of the amount of resource B transported to the left. You are given a 2-D matrix A and B of the same size denoting the amount of resource of the corresponding type in that cell.

// Since the answer can be large, return it modulo 109 + 7.

// Problem Constraints

// 1 <= |A| = |B| <= 103

// 1 <= |A[0]| = |B[0]| <=103

// 0 <= A[i][j], B[i][j] <= 109

// Input Format

// The first line contains a matrix that specifies the availability of the resource A in each of the cells.

// The second line contains a matrix that specifies the availability of the resource B in each of the cells.

// Output Format

// Return a single integer which specifies the maximum amount of resources that can be processed by the factories.

// Example Input

// Input 1:

//    A = [
//          [7, 8, 9]
//          [4, 5, 6]
//          [1, 2, 3]
//        ]

//    B = [
//          [1, 2, 3]
//          [4, 5, 6]
//          [7, 8, 9]
//        ]
// Input 2:

//    A = [
//          [1, 0, 1]
//        ]

//    B = [
//          [2, 1, 0]
//        ]

// Example Output

// Output 1:

//   63
// Output 2:

//   4

// Example Explanation

// Explanation 1:

//   The first row can be sent to the top to collect resource A. The rest two rows will be sent to the left to collect resource B.
// Explanation 2:

//   The first two columns can be sent to the left. The third column will be sent to the top.Total resource collected - 2 + 1 + 1 = 4

const collectResources = (A, B) => {
  // fill the dp matrix and calculate prefix sum of A and B to fill the dp matrix
  // Calculate max ( prefixSumA + dp[i-1][j], prefixSumB + dp[i][j - 1]) for each cell to fill dp matrix

  let dp = [],
    a = [],
    b = [],
    sum = 0;
  let r = A.length,
    c = A[0].length;

  for (let i = 0; i < r; i++) {
    dp.push([]);
    for (let j = 0; j < c; j++) {
      dp[i].push(0);
    }
  }

  for (let i = 0; i < r; i++) {
    a.push([]);
    for (let j = 0; j < c; j++) {
      i === 0 ? a[i].push(A[i][j]) : a[i].push(A[i - 1][j] + A[i][j]);
    }
  }

  console.log('sdkf', a);

  for (let i = 0; i < r; i++) {
    b.push([]);
    sum = 0;
    for (let j = 0; j < c; j++) {
      sum += B[i][j];
      b[i].push(sum);
    }
  }

  console.log('edkf', b);

  for (let i = 0; i < r; i++) {
    for (let j = 0; j < c; j++) {
      let valueA = j > 0 ? a[i][j] + dp[i][j - 1] : a[i][j];
      let valueB = i > 0 ? b[i][j] + dp[i - 1][j] : b[i][j];
      dp[i][j] = Math.max(valueA, valueB);

      console.log('ad', valueA, valueB, dp[i][j]);
    }
  }

  return dp[r - 1][c - 1] % (10 ** 9 + 7);
};

console.log(
  collectResources(
    [
      [4, 2],
      [1, 4],
    ],
    [
      [5, 1],
      [5, 10],
    ]
  )
); //22
