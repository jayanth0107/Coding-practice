// Problem Description
// Given two Integers A, B. You have to calculate (A ^ (B!)) % (1e9 + 7).

// "^" means power,

// "%" means "mod", and

// "!" means factorial.

// Problem Constraints
// 1 <= A, B <= 5e5

// Input Format
// First argument is the integer A

// Second argument is the integer B

// Output Format
// Return one integer, the answer to the problem

// Example Input
// Input 1:

// A = 1
// B = 1
// Input 2:

// A = 2
// B = 2

// Example Output
// Output 1:

// 1
// Output 2:

// 4

// Example Explanation
// Explanation 1:

//  1! = 1. Hence 1^1 = 1.
// Explanation 2:

//  2! = 2. Hence 2^2 = 4.

const veryLargePower = (A, B) => {
  let ans = 1;
  const MOD = 1000000007;

  const multiply = (a, b) => {
    a = BigInt(a);
    b = BigInt(b);
    m = BigInt(MOD);
    return Number((a * b) % m);
  };

  const power = (a, b, m) => {
    if (b == 0) return 1;
    if (b % 2 == 1) return multiply(a, power(a, b - 1, m));
    return power(multiply(a, a), b / 2, m);
  };

  for (let i = 1; i <= +B; i++) {
    ans *= i;
    ans = ans % (MOD - 1);
  }

  return power(+A, ans, MOD);
};

console.log(veryLargePower(1, 1)); //1
console.log(veryLargePower(2, 2)); //4
console.log(veryLargePower(2, 27)); //666348826
