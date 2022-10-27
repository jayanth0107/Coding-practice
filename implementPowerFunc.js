// Problem Description
// Implement pow(A, B) % C.
// In other words, given A, B and C, Find (AB % C).

// Note: The remainders on division cannot be negative. In other words, make sure the answer you return is non-negative.

// Problem Constraints
// -109 <= A <= 109
// 0 <= B <= 109
// 1 <= C <= 109

// Input Format
// Given three integers A, B, C.

// Output Format
// Return an integer.

// Example Input
// A = 2, B = 3, C = 3

// Example Output
// 2

// Example Explanation
// 23 % 3 = 8 % 3 = 2

const powerFunc = (A, B, C) => {
  A = BigInt(A);
  C = BigInt(C);
  if (B === 0) return BigInt(1) % C;
  let halfpower = powerFunc(A, Math.floor(B / 2), C);
  if (B % 2 === 0) {
    return ((halfpower % C) * (halfpower % C)) % C >= 0
      ? ((halfpower % C) * (halfpower % C)) % C
      : (((halfpower % C) * (halfpower % C)) % C) + C;
  } else {
    return ((halfpower % C) * (halfpower % C) * (A % C)) % C >= 0
      ? ((halfpower % C) * (halfpower % C) * (A % C)) % C
      : (((halfpower % C) * (halfpower % C) * (A % C)) % C) + C;
  }
};

console.log(Number(powerFunc(71045970, 41535484, 64735492))); //20805472
// console.log(powerFunc(2, 3, 3));
