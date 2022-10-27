// Problem Description
// Given an array A of N integers.

// Find the largest continuous sequence in a array which sums to zero.

// Problem Constraints
// 1 <= N <= 106

// -107 <= A[i] <= 107

// Input Format
// Single argument which is an integer array A.

// Output Format
// Return an array denoting the longest continuous sequence with total sum of zero.

// NOTE : If there are multiple correct answers, return the sequence which occurs first in the array.

// Example Input
// A = [1,2,-2,4,-4]

// Example Output
// [2,-2,4,-4]

// Example Explanation
// [2,-2,4,-4] is the longest sequence with total sum of zero.

const largestSubSum = (A) => {
  // if subarray sums to zero implies prefixSum values would be same or prefixSum value is 0
  // store prefix sum in hashmap
  let start = 0,
    end = -1;
  let finalStart = 0,
    finalEnd = -1;
  let currentSum = 0;
  let maxLength = 0;

  const hashmap = new Map();

  for (let i = 0; i < A.length; i++) {
    currentSum += A[i];
    //check whether currentSum - k(desired sum 0 in this problem) = 0, if 0 it means
    //the sub array is starting from index 0
    if (currentSum === 0) {
      start = 0;
      end = i;
      if (end - start > maxLength) {
        finalStart = start;
        finalEnd = end;
        maxLength = finalEnd - finalStart;
      }
    }

    //if hashMap already has the value, means we already
    // have subarray with the sum
    if (hashmap.has(currentSum)) {
      start = hashmap.get(currentSum) + 1;
      end = i;
      // console.log('in map', start, end, maxLength);
      if (end - start > maxLength) {
        // console.log('in condition', start, end, maxLength);
        finalStart = start;
        finalEnd = end;
        maxLength = finalEnd - finalStart;
      }
      continue;
    }
    //if value is not present then add to hashmap
    hashmap.set(currentSum, i);
  }

  // console.log('dsf', finalStart, finalEnd);
  // return A.slice(finalStart, finalEnd + 1).length
  //   ? A.slice(finalStart, finalEnd + 1)
  //   : 0;
  if (finalEnd === -1 && A.includes(0)) return [0];
  else return A.slice(finalStart, finalEnd + 1);
};

console.log(largestSubSum([1, 2, -2, 4, -4]));
console.log(largestSubSum([1, 2, -3, 3]));
console.log(largestSubSum([0, -10, 20, 3, 23, 10, -20, 2, 19, -29, 0]));
console.log(largestSubSum([-19, 8, 2, -8, 19, 5, -2, -23]));
console.log(
  largestSubSum([
    29, 19, -5, 3, -16, 20, -3, -25, -11, 22, -19, 29, -16, -17, -28, 0, -6, 21,
    11, -6, 0, 4, -4, -21,
  ])
);
