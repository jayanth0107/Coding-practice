// Given an array of integers, find two numbers such that they add up to a specific target number.

// The function twoSum should return indices of the two numbers such that they add up to the target, where index1 < index2. Please note that your returned answers (both index1 and index2 ) are not zero-based. Put both these numbers in order in an array and return the array from your function ( Looking at the function signature will make things clearer ). Note that, if no pair exists, return empty list.

// If multiple solutions exist, output the one where index2 is minimum. If there are multiple solutions with the minimum index2, choose the one with minimum index1 out of them.

// Input: [2, 7, 11, 15], target=9
// Output: index1 = 1, index2 = 2

const Twosum = (A, B) => {
  const dataHash = new Map();
  let result = [];
  // for (let i = 0; i < A.length; i++) {
  //   dataHash.set(A[i], i); // create memo object
  // }

  // for (let i = 0; i < A.length; i++) {
  //   let missingNumber = B - A[i];
  //   console.log('hd', dataHash, missingNumber, i, dataHash.get(0));
  //   if (dataHash.get(missingNumber) && dataHash.get(missingNumber) !== i) {
  //     return [dataHash.get(missingNumber) + 1, i + 1];
  //   }
  // }
  // return A[0] + A[1] === B ? [1, 2] : [];

  for (let i = 0; i < A.length; i++) {
    let count = dataHash.get(A[i]);
    if (A[i] * 2 === B && count) {
      result.push([dataHash.get(A[i]), i + 1]);
    } else if (dataHash.has(B - A[i]) && !count) {
      result.push([dataHash.get(B - A[i]), i + 1]);
    }
    if (!count) {
      dataHash.set(A[i], i + 1);
    } else {
      dataHash.set(A[i], dataHash.get(A[i]));
    }
  }

  // console.log('hd', dataHash);

  return result[0] || [];
};

console.log(Twosum([2, 7, 11, 15], 9)); //1,2
console.log(Twosum([1, 1, 1], 2)); //1,2
console.log(Twosum([-10, -10, -10], -5)); //[]
// console.log(
//   Twosum(
//     [
//       2, 5, 0, -6, 7, -4, 0, 4, 3, 0, -2, 0, 9, -3, -9, -3, 9, 3, 2, -10, -8,
//       -3, -10, -5, 2, -8, 4, 5, 6, 7, -10, 4, -3, -10, 5, 4, 1, 5, 5, -3, -1,
//       -8, -3, -6, -7, -8, -8, -7, 0, -2, 7, 7, 10, -7, -7, 10, -4, 0, 0, -6, -5,
//       -5, 0, 8, 4, 1, 4, -1, -10, -4, -6, 10, -2, 9, -6, -3, -4, -1, 10, -9, -5,
//       10, -5, 8, 3,
//     ],
//     0
//   )
// ); //3,7

console.log(
  Twosum(
    [
      4, 7, -4, 2, 2, 2, 3, -5, -3, 9, -4, 9, -7, 7, -1, 9, 9, 4, 1, -4, -2, 3,
      -3, -5, 4, -7, 7, 9, -4, 4, -8,
    ],
    -3
  )
); //4, 8
