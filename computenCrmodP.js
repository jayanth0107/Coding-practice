// Given three integers A, B, and C, where A represents n, B represents r, and C represents p and p is a prime number greater than equal to n, find and return the value of nCr % p where nCr % p = (n! / ((n-r)! * r!)) % p.

// x! means factorial of x i.e. x! = 1 * 2 * 3... * x.

// NOTE: For this problem, we are considering 1 as a prime.

// Problem Constraints
// 1 <= A <= 106
// 1 <= B <= A
// A <= C <= 109+7

// Input Format
// The first argument given is the integer A ( = n).
// The second argument given is the integer B ( = r).
// The third argument given is the integer C ( = p).

// Output Format
// Return the value of nCr % p.

// Example Input
// Input 1:

//  A = 5
//  B = 2
//  C = 13
// Input 2:

//  A = 6
//  B = 2
//  C = 13

// Example Output
// Output 1:

//  10
// Output 2:

//  2

// Example Explanation
// Explanation 1:

//  nCr( n=5 and r=2) = 10.
//  p=13. Therefore, nCr%p = 10.

const comuptenCrmodP = (A, B, C) => {
  // Returns nCr % p using Fermat's little theorem.
  let n = BigInt(A),
    r = BigInt(B),
    p = BigInt(C);

  /* Iterative Function to calculate (x^y)%p in O(log y) */
  const power = (x, y, p) => {
    // Initialize result
    let res = 1n;

    // Update x if it is more than or equal to p
    x = x % p;

    while (y > 0n) {
      // If y is odd, multiply x with result
      if (y & 1n) res = (res * x) % p;

      // y must be even now
      y = y >> 1n; // y = y/2
      x = (x * x) % p;
    }

    return res;
  };

  // Returns n^(-1) mod p
  const modInverse = (n, p) => power(n, p - 2n, p);

  if (n < r) return 0;

  // Base case
  if (r === 0) return 1;

  if (r === 1) return n % p;

  // Fill factorial array so that we can find all factorial of r, n and n-r
  let fac = new Array(n + 1n);
  fac[0] = 1n;

  for (let i = 1; i <= n; i++) {
    fac[i] = (fac[i - 1] * BigInt(i)) % p;
    // console.log('chk fac[', i, ']= ', fac[i]);
  }

  console.log('test1= ', modInverse(fac[r], p) % p);
  console.log('test2= ', modInverse(fac[n - r], p) % p);

  return (
    (((fac[n] % p) * (modInverse(fac[r], p) % p) * modInverse(fac[n - r], p)) %
      p) %
    p
  );
};

console.log(comuptenCrmodP(5, 2, 13)); //10
console.log(comuptenCrmodP(1000000, 1, 1000000007)); //1000000
console.log(comuptenCrmodP(672754, 366515, 15194317)); //8795477
console.log(comuptenCrmodP(475987, 235829, 8200403)); //4827996
