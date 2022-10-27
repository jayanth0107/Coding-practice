// Problem Description
// You are given a string A of size N consisting of lowercase alphabets.

// You can change at most B characters in the given string to any other lowercase alphabet such that the number of distinct characters in the string is minimized.

// Find the minimum number of distinct characters in the resulting string.

// Problem Constraints
// 1 <= N <= 100000

// 0 <= B < N

// Input Format
// The first argument is a string A.

// The second argument is an integer B.

// Output Format
// Return an integer denoting the minimum number of distinct characters in the string.

// Example Input
// A = "abcabbccd"
// B = 3

// Example Output
// 2

// Example Explanation
// We can change both 'a' and one 'd' into 'b'.So the new string becomes "bbcbbbccb".
// So the minimum number of distinct character will be 2.

const changeCharacter = (A, B) => {
  let charCount = {};
  let dist_count = 0;

  if (B === 0) return A.length;

  for (let char of A) {
    if (!charCount[char]) {
      charCount[char] = 1;
      dist_count++;
    } else charCount[char]++;
  }

  if (B >= A.length) return 1;

  let values = Object.values(charCount).sort((a, b) => a - b);

  for (let i = 0; i <= values.length; i++) {
    if (values[i] <= B) {
      B -= values[i];
      dist_count--;
    }
  }

  console.log('dsf obj', charCount, values, dist_count);

  return dist_count;
};

console.log(changeCharacter('hq', 0)); //expected: 2
console.log(changeCharacter('umeaylnlfd', 1)); //expected: 8
console.log(changeCharacter('ircvscxggbwkfnqd', 2)); //expected: 12
console.log(changeCharacter('abcabbccd', 3)); //expected: 2
