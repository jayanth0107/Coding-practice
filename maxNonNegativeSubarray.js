// Given an array of integers, A of length N, find out the maximum sum sub-array of non negative numbers from A.

// The sub-array should be contiguous i.e., a sub-array created by choosing the second and fourth element and skipping the third element is invalid.

// Maximum sub-array is defined in terms of the sum of the elements in the sub-array.

// Find and return the required subarray.

// NOTE:

//     1. If there is a tie, then compare with segment's length and return segment which has maximum length.
//     2. If there is still a tie, then return the segment with minimum starting index.

// Input Format:

// The first and the only argument of input contains an integer array A, of length N.
// Output Format:

// Return an array of integers, that is a subarray of A that satisfies the given conditions.
// Constraints:

// 1 <= N <= 1e5
// -INT_MAX < A[i] <= INT_MAX
// Examples:

// Input 1:
//     A = [1, 2, 5, -7, 2, 3]

// Output 1:
//     [1, 2, 5]

// Explanation 1:
//     The two sub-arrays are [1, 2, 5] [2, 3].
//     The answer is [1, 2, 5] as its sum is larger than [2, 3].

// Input 2:
//     A = [10, -1, 2, 3, -4, 100]

// Output 2:
//     [100]

// Explanation 2:
//     The three sub-arrays are [10], [2, 3], [100].
//     The answer is [100] as its sum is larger than the other two.

const maxNonNegativeSubarray = (A) => {
  let maxSoFar = 0,
    maxRightNow = 0;
  let maxSubArray = [],
    result = [];

  for (let i = 0; i < A.length; i++) {
    if (A[i] < 0) {
      maxRightNow = 0;
      maxSubArray = [];
    } else {
      maxRightNow += A[i];
      maxSubArray.push(A[i]);
    }
    // console.log('max', maxSubArray, 'er', maxRightNow, maxSoFar, result);
    if (
      maxRightNow > maxSoFar ||
      (maxRightNow === maxSoFar && maxSubArray.length > result.length)
    ) {
      maxSoFar = maxRightNow;
      result = maxSubArray;
      // console.log('ldfk', maxSoFar, result);
    }
  }
  return result;
};

// console.log(
//   maxNonNegativeSubarray([
//     25150, 1412, 82797, 48381, 7065, -47699, -25129, -65483, -64607, -45322,
//     -55176, 27224, 80366, 60444, 70285, -93898, -41133, 96576, -58266, 21711,
//     -20614, -95737, 20591, -48762, -76197, -38588, -54873, 37304, 61200, -68960,
//     93947,
//   ])
// );

console.log(maxNonNegativeSubarray([0, 0, -1, 0]));
