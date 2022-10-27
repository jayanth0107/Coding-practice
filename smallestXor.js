// Problem Description
// Given two integers A and B, find a number X such that A xor X is minimum possible, and the number of set bits in X equals B.

// Problem Constraints
// 0 <= A <= 109
// 0 <= B <= 30

// Input Format
// First argument contains a single integer A. Second argument contains a single integer B.

// Output Format
// Return a single integer X.

// Example Input
// Input 1:

//  A = 3
//  B = 3
// Input 2:

//  A = 15
//  B = 2

// Example Output
// Output 1:

//  7
// Output 2:

//  12

// Example Explanation
// Explanation 1:

//  3 xor 7 = 4 which is minimum
// Explanation 2:

//  15 xor 12 = 3 which is minimum

const smallestXor = (A, B) => {
  // count bits set in X
  let countSetBitsInX = 0;
  let b = B;

  // no of set bits in X = no of set bits in B
  while (b) {
    if (b & 1) countSetBitsInX++;
    b = b >> 1;
  }

  console.log('set bits in X = ', countSetBitsInX);

  // set same bits as A , so that when we do A xor X it will be 0 minimum
  // we have to set bits from rightmost value so that output will be minimum possible closer to 0
  let answer = 0;
  let noOfBitsToSetInX = countSetBitsInX;
  for (let i = 31; i >= 0 && noOfBitsToSetInX; i--) {
    // check if bit is set in A -> set same bit in X
    if (A & (1 << i)) {
      answer |= 1 << i; // set same bit in X which is answer variable
      noOfBitsToSetInX--;
    }
  }

  // Now set the bits in X traversing from least significant bit(lsb) to msb
  for (let j = 0; j <= 31 && noOfBitsToSetInX; j++) {
    if ((answer & (1 << j)) == 0) {
      answer |= 1 << j; // set same bit in X which is answer variable
      noOfBitsToSetInX--;
    }
  }

  return answer;
};

console.log(smallestXor(4, 6));
