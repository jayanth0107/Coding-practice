// Problem Description
// You are given a number A and a number B. Greatest Common Divisor (GCD) of all numbers between A and B inclusive is taken (GCD(A, A+1, A+2 ... B)).
// As this problem looks a bit easy, it is given that numbers A and B can be in the range of 10100.

// You have to return the value of GCD found.

// The greatest common divisor of 2 numbers, A and B, is the largest number, D that divides both A and B perfectly.

// Problem Constraints
// 1 <= A <= B <= 10100

// Input Format
// First argument is a string denoting A.

// Second argument is a string denoting B.

// Output Format
// Return a string which contains the digits of the integer which represents the GCD. The returned string should not have any leading zeroes.

// Example Input
// A = "1"
// B = "3"

// Example Output
// 1

// Example Explanation
// Greatest divisor that divides both 1 and 3 is 1.

const enumeratingGCD = (A, B) => {
  // const gcd = (a, b) => {
  //   if (!a) return b;
  //   return gcd(b % a, a);
  // };

  // function reduceB(large, small) {
  //   // Initialize result
  //   let mod = 0,
  //     digit;

  //   // calculating mod of b with a to make
  //   // b like 0 <= b < a
  //   for (let i = 0; i < large.length; i++) {
  //     digit = large[i] - '0';
  //     mod = mod * 10 + digit;
  //     mod = mod % small;
  //   }

  //   return mod; // return modulo
  // }

  // let num = reduceB(B, A);

  // console.log('interm', num);
  // if (num === 0) return A;

  // return gcd(A, num);

  // GCD of two consecutive numbers is always 1
  return A === B ? A : 1;
};

console.log(enumeratingGCD('3412', '3412')); //3412
console.log(enumeratingGCD('1', '3')); //1
console.log(enumeratingGCD('678728391838182039102', '678728391838182039103')); //1
