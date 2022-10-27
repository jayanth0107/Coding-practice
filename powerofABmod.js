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

const powerofABmod = (A, B, C) => {
  let result = 1n;
  A = BigInt(A);
  C = BigInt(C);
  // A = A % C;

  if (A === 0n) return 0;

  // mod for very large numbers
  const mod = (a) => {
    return a < 0 ? (a % C) + C : a % C;
  };

  // mod multiplication for very large numbers
  const mul = (a, b) => {
    return mod(mod(a) * mod(b));
  };

  while (B > 0) {
    // for B odd
    if (B & 1) result = mul(result, A);
    // for B even
    B = B >> 1;
    A = mul(A, A);
  }

  return result < 0 ? result + C : Number(result);
};

console.log(powerofABmod(67790475, 13522204, 98794224)); //38615985
