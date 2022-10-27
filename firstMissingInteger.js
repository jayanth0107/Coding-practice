// Problem Description
// Given an unsorted integer array, A of size N. Find the first missing positive integer.

// Note: Your algorithm should run in O(n) time and use constant space.

// Problem Constraints
// 1 <= N <= 1000000

// -109 <= A[i] <= 109

// Input Format
// First argument is an integer array A.

// Output Format
// Return an integer denoting the first missing positive integer.

// Example Input
// Input 1:

// [1, 2, 0]
// Input 2:

// [3, 4, -1, 1]
// Input 3:

// [-8, -7, -6]

// Example Output
// Output 1:

// 3
// Output 2:

// 2
// Output 3:

// 1

// Example Explanation
// Explanation 1:

// A = [1, 2, 0]
// First positive integer missing from the array is 3.

const firstMissingInteger = (A) => {
  // swaps
  // let i = 0,
  //   N = A.length,
  //   correctIdx;

  // while (i < N) {
  //   console.log('in while', i, A[i]);
  //   if (A[i] >= 1 && A[i] <= N) {
  //     correctIdx = A[i] - 1;
  //     if (A[correctIdx] !== A[i]) {
  //       //swap
  //       let temp = A[correctIdx];
  //       A[correctIdx] = A[i];
  //       A[i] = temp;
  //     }
  //   }
  //   i++;
  // }

  // // console.log('after swap', A);
  // let negative = 0;
  // // verify
  // for (i = 0; i < N; i++) {
  //   if (A[i] >= 0 && A[i] !== i + 1) {
  //     return i + 1;
  //   } else if (A[i] < 0) {
  //     negative++;
  //   }
  // }
  // console.log('negative: ' + negative);
  // // for all negative elements in A
  // if (negative === N) {
  //   return 1;
  // }
  // return i + 1;

  A = A.map((ele) => ele - 1);
  let id = 0;
  while (id < A.length) {
    if (A[id] >= 0 && A[id] < A.length) {
      let now = A[id];
      if (A[now] != A[id]) {
        [A[now], A[id]] = [A[id], A[now]];
        id--;
      }
    }
    id++;
  }
  for (let i = 0; i < A.length; i++) {
    if (i != A[i]) return i + 1;
  }
  return A.length + 1;
};

console.log(firstMissingInteger([2, 3, 1, 2])); //4
console.log(firstMissingInteger([1, 2, 0])); //3
console.log(firstMissingInteger([3, 4, -1, 1])); //2
console.log(firstMissingInteger([-8, -7, -6])); //1
console.log(firstMissingInteger([1])); //2
console.log(firstMissingInteger([1, 2, 3, 4, 5, 6])); //7

console.log(
  firstMissingInteger([
    699, 2, 690, 936, 319, 784, 562, 35, 151, 698, 126, 730, 587, 157, 201, 761,
    956, 359, 198, 986, 915, 7, 703, 324, 814, 382, 294, 204, 120, 731, 615,
    330, 486, 52, 223, 376, 649, 458, 564, 971, 72, 605, 177, 20, 461, 790, 872,
    363, 916, 435, 991, 184, 410, 320, 16, 480, 768, 801, 117, 338, 650, 786,
    17, 369, 979, 304, 445, 688, 862, 229, 311, 351, 985, 697, 135, 299, 310, 3,
    643, 221, 831, 196, 887, 679, 484, 209, 824, 292, 588, 721, 140, 675, 827,
    913, 271, 170, 812, 552, 334, 860, 981, 550, 308, 584, 442, 328, 251, 456,
    976, 31, 507, 954, 982, 742, 45, 727, 794, 309, 527, 623, 56, 843, 436, 681,
    143, 130, 689, 870, 362, 580, 560, 474, 385, 525, 881, 51, 890, 917, 820,
    826, 139, 443, 978, 144, 512, 205, 682, 188, 344, 429, 497, 181, 749, 864,
    664, 145, 621, 629, 886, 572, 89, 725, 945, 29, 553, 977, 783, 590, 236,
    728, 125, 90, 492, 261, 543, 259, 662, 622, 285, 392, 561, 670, 200, 504,
    246, 513, 910, 583, 460, 179, 207, 709, 127, 926, 816, 426, 520, 174, 464,
    883, 780, 5, 268, 606, 1, 109, 704, 391, 661, 924, 516, 241, 477, 952, 405,
    522, 247, 335, 356, 839, 423, 779, 4, 43, 720, 238, 965, 951, 914, 10, 496,
    775, 651, 788, 373, 491, 746, 799, 518, 93, 86, 774, 652, 955, 494, 252,
    781, 946, 412, 202, 741, 719, 612, 673, 896, 1000, 289, 554, 69, 424, 980,
    506, 593, 889, 25, 959, 28, 736, 8, 969, 865, 657, 567, 434, 9, 167, 357,
    929, 645, 250, 565, 94, 928, 473, 509, 823, 313, 762, -1, 208, 903, 922,
    655, 948, 326, 485, 150, 73, 505, 225, 122, 129, 648, 838, 811, 972, 735,
    78, 428, 740, 782, 632, 316, 440, 737, 297, 873, 281, 479, 654, 0, 633, 212,
    152, 154, 470, 866, 79, 722, 958, 732, 900, 832, 278, 58, 842, 745, 540,
    169, 347, 592, 438, 882, 462, 53, 34, 519, 489, 85, 757, 919, 701, 15, 211,
    667, 637, 74, 573, 240, 559, -2, 472, 203, 112, 162, 776, -4, 155, 837, 99,
    98, 64, 101, 983, 366, 853, 970, 482, 40, 921, 374, 758, 413, 339, 705, 771,
    360, 734, 282, 219, 766, 535, 133, 532, 254,
  ])
); //6
