// Problem Constraints
// 1 <= A <= 50000

// String A consists only of lowercase letters.

// Input Format
// The first and only argument is a string A.

// Output Format
// Return 1 if the string A is a palindrome, else return 0.

// Example Input
// Input 1:

//  A = "naman"
// Input 2:

//  A = "strings"

// Example Output
// Output 1:

//  1
// Output 2:

//  0

// Example Explanation
// Explanation 1:

//  "naman" is a palindomic string, so return 1.
// Explanation 2:

//  "strings" is not a palindrome, so return 0.

const chkPalindrome = (A) => {
  let start = 0,
    end = A.length - 1;
  return isPalindrome(A, start, end);
};

const isPalindrome = (A, start, end) => {
  console.log('hj', start, end, A[start], A[end]);
  if (start > end) return 1;
  if (A[start] !== A[end]) return 0;
  else {
    return isPalindrome(A, start + 1, end - 1);
  }
};

console.log(chkPalindrome('madam'));
console.log(chkPalindrome('strings'));
