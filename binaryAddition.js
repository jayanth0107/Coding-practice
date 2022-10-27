// Problem Description
// Given two binary strings, return their sum (also a binary string).
// Example:

// a = "100"

// b = "11"
// Return a + b = "111".

const addBinary = (A, B) => {
    let result = "";

    let firstStringLen = A.length;
    let secondStringLen = B.length;
    let carry = 0;
    let max = Math.max(firstStringLen, secondStringLen);

    while(max > 0) {
        let a = +A.charAt(firstStringLen - 1);
        let b = +B.charAt(secondStringLen - 1);

        let sum = a + b + carry;
        let digitSum = sum % 2;
        carry = Math.floor(sum / 2);    


        // console.log("dk", a, b, sum, digitSum, carry)
        result = digitSum + result;
        firstStringLen--;
        secondStringLen--;
        max--;
    }

    return carry ? carry + result : result;
}

// console.log(addBinary("100", "11"))
// console.log(addBinary("110", "11"))
// console.log(addBinary("11111", "111"))
console.log(addBinary("1010110111001101101000", "1000011011000000111100110"))