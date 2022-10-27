// Problem Description
// Given a string A and a string B, find the window with minimum length in A, which will contain all the characters in B in linear time complexity.
// Note that when the count of a character c in B is x, then the count of c in the minimum window in A should be at least x.

// Note:

// If there is no such window in A that covers all characters in B, return the empty string.
// If there are multiple such windows, return the first occurring minimum window ( with minimum start index and length )

// Problem Constraints
// 1 <= size(A), size(B) <= 106

// Input Format
// The first argument is a string A.
// The second argument is a string B.

// Output Format
// Return a string denoting the minimum window.

// Example Input
// Input 1:

//  A = "ADOBECODEBANC"
//  B = "ABC"
// Input 2:

//  A = "Aa91b"
//  B = "ab"

// Example Output
// Output 1:

//  "BANC"
// Output 2:

//  "a91b"

// Example Explanation
// Explanation 1:

//  "BANC" is a substring of A which contains all characters of B.
// Explanation 2:

//  "a91b" is the substring of A which contains all characters of B.

const windowString = (A, B) => {
  // left and right pointers initialized, `right` is -1 since every loop, we start by expanding the right boundary
  // setting this to -1 ensures that we will check the first char on the first time
  let left = 0,
    right = -1,
    result = [],
    minLength = A.length,
    found = false,
    start = 0,
    end = 0;
  let map = new Map();

  // this creates a map for the count of all the unique characters in B
  B.split('').forEach((element) => {
    if (!map.has(element)) map.set(element, 1);
    else map.set(element, map.get(element) + 1);
  });

  // Number of unique characters in B, which need to be present in the desired window.
  let required = map.size;

  console.log('map-', map, required);
  while (right <= A.length) {
    // found a valid substring
    if (required === 0) {
      // try to shift left boudary to the right, this means the very left character will be removed
      // because of this, we need to check whats the affect by removing that character,
      let current = A[left];

      // if this chacter is in our map, it means we ll need to find another one in the future
      if (map.has(current)) map.set(current, map.get(current) + 1);

      // we must have the condition `>0` because for case like "BBBA...", count for B could be negative
      if (map.get(current) > 0) required++;

      // let temp = A.substring(left, right + 1);
      // if (min === '') min = temp;
      // else {
      //   min = min.length < temp.length ? min : temp;
      //   if (min.length < minimum) {
      //     console.log('dj', min);
      //     minimum = min.length;
      //     result.push(min);
      //   }
      // }

      if (right - left < minLength) {
        found = true;
        start = left;
        end = right;
        minLength = right - left;
      }

      left++;
      // console.log('in if-', map, required, left, result);
    } else {
      right++;
      let current = A[right];

      // decrease the count for this character
      if (map.has(current)) map.set(current, map.get(current) - 1);

      if (map.get(current) == 0) required--;
      // console.log('in else-', map, required, right);
    }
  }
  if (found) {
    if (start === 1) {
      return A.slice(start, end + 1);
    }
    return A.slice(start, end + 1);
  }

  return '';
};

// console.log(windowString('ADOBECODEBANC', 'ABC'));
// console.log(
//   windowString(
//     'gegQ0SyEf0mUUd5fj8dT2og0i6OAS23iH2KcUkgFJznx99BUxlRZwRYlxR2XOumdC9B86v7SwhPGf9jLlBzVG4yWr528539Kme5CEZcABNr3rbzGpr76enhArjhlsnhHfRWs9xTzmPQLZpaw9yMVYZgevrWoIKiuKj89LQHqFWkddRxuehQNh2HrPuDLJTmUZvCfErufmrjjkOd9FKUbYpwrzZB8eoMIntpSzUXc8RaBmE3QCIQB16MXhMm4Q3TTSMC53cPDlAqCemD88cZNbS9wTMyqUuauQQKDZOpFYBmmHbJ6odrFw1jxWWrJTpm6Lf5ezr7mjJ9wrWlKtVIjHtIdBHZWE6P9xIgl7g4Z0RUKvbhE2RfzpuvcxQZOwoxueBjInfth3IQjqlEHaK03U5sYoeaku5porYAANaAAxuduQz8smMbbH15KlLBgbwR1L6s7jBygv395dh28u9Isog7DLM5Kg1WUvLYh7LMbfnvbQ7eBFENAbfLvFOxzzy8RhV4bsU1Z5qpjpGM0lzlPV6TiqXoJwY1HHpdKBjq3n9yabcQgXLcgNBu8p1e07oI8DRat3YQonX04EoOw6GU2OeeoVRMay5Q0YetVFpMLNs6D4Z4qB0ZDSAXF5Ll1nXGh7fvuzXBY4SAV9AhRnxLpJl2hcUT6irHal0QPe0OgzFAEL6Cc5sf3SwkUBLIwpqzXaTHD5IylNyvGVXmI0x6aHBtoTkosOX778umnaMrCwOG0MHmKmLBUOmxCtbDPPeWMwHstwaUjeTPrsLBMldEc9Wy4odN',
//     'nNYbBKeom7CEqpy8O9eCuYwA'
//   )
// );

// console.log(windowString('A', 'A'));
console.log(windowString('AAAAAA', 'AA'));
