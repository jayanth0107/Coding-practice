// Problem Description
// Given two strings A and B. Each string represents an expression consisting of lowercase English alphabets, '+', '-', '(' and ')'.

// The task is to compare them and check if they are similar. If they are identical, return 1 else, return 0.

// NOTE: It may be assumed that there are at most 26 operands from ‘a’ to ‘z’, and every operand appears only once.

// Problem Constraints
// 1 <= length of the each String <= 100

// Input Format
// The given arguments are string A and string B.

// Output Format
// Return 1 if they represent the same expression else return 0.

// Example Input
// Input 1:

//  A = "-(a+b+c)"
//  B = "-a-b-c"
// Input 2:

//  A = "a-b-(c-d)"
//  B = "a-b-c-d"

// Example Output
// Output 1:

//  1
// Output 2:

//  0

// Example Explanation
// Explanation 1:

//  The expression "-(a+b+c)" can be written as "-a-b-c" which is equal as B.
// Explanation 2:

//  Both the expression are different.

const check2BE = (A, B) => {
  // The sign before every number is considered as localOperator the sign outside the brackets is considered as globalOperator.
  // 1. Store the signs of each character array of size 26.
  // 2. For each string, traverse over each character, and determine its sign by first looking at localOperator and then change it based on globalOperator. if (-, -) then change it to +, if (-, +) or (+ -) then change it to - and + by default.
  // 3. Finally compare both the arrays, there should be same sign at their respctive places.

  let globalSignStack = [];
  globalSignStack.push('+');

  const getProperSign = (sign1, sign2) => {
    if ((sign1 == '-' && sign2 == '+') || (sign1 == '+' && sign2 == '-')) {
      return '-';
    }
    return '+';
  };

  const calculateSigns = (str) => {
    let signArray = new Array(26).fill('+');
    let localSign = '+';

    for (let char of str) {
      if (char === '-' || char === '+') {
        if (globalSignStack.length === 0) {
          localSign = char;
        } else {
          localSign = getProperSign(
            globalSignStack[globalSignStack.length - 1],
            char
          );
        }
        continue;
      }

      if (char === '(') {
        globalSignStack.push(localSign);
        continue;
      }

      if (char === ')') {
        globalSignStack.pop();
        continue;
      }

      signArray[char.charCodeAt(0) - 'a'.charCodeAt(0)] = localSign;
    }

    return signArray;
  };

  let arrayA = calculateSigns(A);
  let arrayB = calculateSigns(B);

  console.log('signArray A-', arrayA, ', signArray B-', arrayB);

  for (let i = 0; i < arrayA.length - 1; i++) {
    if (arrayA[i] !== arrayB[i]) return 0;
  }

  return 1;
};

// console.log(check2BE('-(a+b+c)', '-a-b-c'));
// console.log(check2BE('a-b-(c-d)', 'a-b-c-d'));
// console.log(check2BE('a+b-c+d-e', '(a+b-c+d-e)'));
console.log(check2BE('a+b-c+d-e-f', '(a+b-c-d-e+f)'));

// console.log(check2BE('-(-(-(-a+b)-d+c)-q)', 'a-b-d+c+q'));
