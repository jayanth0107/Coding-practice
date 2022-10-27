// Groot has N trees lined up in front of him where the height of the i'th tree is denoted by H[i].

// He wants to select some trees to replace his broken branches.

// But he wants uniformity in his selection of trees.

// So he picks only those trees whose heights have frequency K.

// He then sums up the heights that occur K times. (He adds the height only once to the sum and not K times).

// But the sum he ended up getting was huge so he prints it modulo 10^9+7.

// In case no such cluster exists, Groot becomes sad and prints -1.

// Constraints:

// 1.   1<=N<=100000
// 2.   1<=K<=N
// 3.   0<=H[i]<=10^9
// Input: Integers N and K and array of size A

// Output: Sum of all numbers in the array that occur exactly K times.

// Example:

// Input:

// N=5 ,K=2 ,A=[1 2 2 3 3]
// Output:

// 5
// Explanation:

// There are 3 distinct numbers in the array which are 1,2,3.
// Out of these, only 2 and 3 occur twice. Therefore the answer is sum of 2 and 3 which is 5.

const Koccurences = (A, B, C) => {
  let answer = 0;
  const hashmap = new Map();
  for (let i of C) {
    if (hashmap.has(i)) {
      hashmap.set(i, hashmap.get(i) + 1);
    } else {
      hashmap.set(i, 1);
    }
  }

  console.log('dhf', hashmap, hashmap.size);
  let isVisited = false;
  hashmap.forEach((value, key) => {
    if (value === B) {
      answer += key;
      console.log('in ', answer, key);
      isVisited = true;
    }
  });

  if (!isVisited) return -1;
  else return answer % (10 ** 9 + 7);
};

// console.log(Koccurences(5, 2, [1, 2, 2, 3, 3]));
console.log(
  Koccurences(
    6,
    2,
    [1000000000, 1000000000, 999999999, 999999999, 999999998, 1]
  ) //999999992
);
