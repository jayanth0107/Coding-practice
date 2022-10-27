// Problem Description
// Given an array of size N, find the subarray of size K with the least average.



// Problem Constraints
// 1<=k<=N<=1e5
// -1e5<=A[i]<=1e5


// Input Format
// First argument contains an array A of integers of size N.
// Second argument contains integer k.


// Output Format
// Return the index of the first element of the subarray of size k that has least average.
// Array indexing starts from 0.


// Example Input
// Input 1:
// A=[3, 7, 90, 20, 10, 50, 40]
// B=3
// Input 2:

// A=[3, 7, 5, 20, -10, 0, 12]
// B=2


// Example Output
// Output 1:
// 3
// Output 2:

// 4


// Example Explanation
// Explanation 1:
// Subarray between indexes 3 and 5
// The subarray {20, 10, 50} has the least average 
// among all subarrays of size 3.
// Explanation 2:

//  Subarray between [4, 5] has minimum average

const sala = (A, B) => {

    let currentSum = 0, resultIdx = 0;
    for(let i = 0; i < B; i++) {
        currentSum += A[i];
    }

    let minSum = currentSum;
    for(let i = B; i < A.length; i++) {
        currentSum += A[i] - A[i - B];
        if(currentSum < minSum) {
            minSum = currentSum;
            resultIdx = i - B + 1; //starting index where sum is minimum
        }
    }
    return resultIdx;
	
}

console.log(sala([ 18, 11, 16, 19, 11, 9, 8, 15, 3, 10, 9, 20, 1, 19 ], 1))