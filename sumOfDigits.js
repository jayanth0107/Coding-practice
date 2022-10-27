// Problem Description
// Given a number A, we need to find the sum of its digits using recursion.

// Problem Constraints
// 1 <= A <= 109

// Input Format
// The first and only argument is an integer A.

// Output Format
// Return an integer denoting the sum of digits of the number A.

// Example Input
// Input 1:

//  A = 46
// Input 2:

//  A = 11

// Example Output
// Output 1:

//  10
// Output 2:

//  2

// Example Explanation
// Explanation 1:

//  Sum of digits of 46 = 4 + 6 = 10
// Explanation 2:

//  Sum of digits of 11 = 1 + 1 = 2

const sumOfDigits = (A) => {
  let answer = 0;
  const digitSum = (N) => {
    if (N === 0) {
      // console.log('end rec', answer);
      return answer;
    }
    answer += N % 10;
    N = Math.floor(N / 10);
    // console.log('sdf', answer, N);
    return digitSum(N);
  };
  digitSum(A);
};

console.log(sumOfDigits(46));
console.log(sumOfDigits(11));
console.log(sumOfDigits(123));
