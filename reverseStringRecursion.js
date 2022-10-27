// const reverseString = (string, start, end) => {
//   if (start > end) return string;
//   // swap characters
//   let temp = string[start];
//   string[start] = string[end];
//   string[end] = temp;
//   console.log('chk', string, start, end, string[start]);
//   return reverseString(string, start + 1, end - 1);
// };

const reverseString = (S) => {
  // console.log('sxdf', S, S.length);
  if (S.length === 0) {
    return '';
  }
  let N = S.length;
  // console.log('df', N, S);
  return S.charAt(N - 1) + reverseString(S.substring(0, N - 1));
};

let string = 'scaleracademy';
console.log(reverseString(string));
