// Problem Description
// You are given a string A of lowercase English alphabets. Rearrange the characters of the given string A such that there is no boring substring in A.

// A boring substring has the following properties:

// Its length is 2.
// Both the characters are consecutive, for example - "ab", "cd", "dc", "zy" etc.(If the first character is C then the next character can be either (C+1) or (C-1)).
// Return 1 if it is possible to rearrange the letters of A such that there are no boring substrings in A else, return 0.

// Problem Constraints
// 1 <= |A| <= 105

// Input Format
// The only argument given is a string A.

// Output Format
// Return 1 if it is possible to rearrange the letters of A such that there are no boring substrings in A else, return 0.

// Example Input
// Input 1:

//  A = "abcd"
// Input 2:

//  A = "aab"

// Example Output
// Output 1:

//  1
// Output 2:

//  0

// Example Explanation
// Explanation 1:

//  String A can be rearranged into "cadb" or "bdac"
// Explanation 2:

//  No arrangement of string A can make it free of boring substrings.

const boringSubString = (A) => {
  // Group the characters into two different buckets,
  // where one bucket contains the characters which are at the even places
  // and another bucket contains the characters which are at the odd places.
  // Finally, check for the concatenation point of both the group is not a monotonous substring.
  // By fetching Min Max we get starting and ending pointing of sorted odd/even character group
  // We compare if abs diff is not 1 then String can arranged to avoid boring string.

  let n = A.length;
  let evenMin = Infinity;
  let evenMax = -Infinity;
  let oddMin = Infinity;
  let oddMax = -Infinity;

  for (let i = 0; i < n; i++) {
    let charInt = A[i].charCodeAt(0);
    if (charInt % 2 == 0) {
      evenMin = Math.min(evenMin, charInt);
      evenMax = Math.max(evenMax, charInt);
    } else {
      oddMin = Math.min(oddMin, charInt);
      oddMax = Math.max(oddMax, charInt);
    }
  }

  console.log(
    'For string-',
    A,
    ', even min,max-',
    evenMin,
    evenMax,
    ', odd min,max',
    oddMin,
    oddMax
  );

  if (Math.abs(oddMax - evenMin) != 1) {
    return 1;
  }
  if (Math.abs(evenMax - oddMin) != 1) {
    return 1;
  }
  return 0;
};

console.log(boringSubString('abcd'));
console.log(boringSubString('aab'));
