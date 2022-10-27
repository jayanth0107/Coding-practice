// Problem Description
// You are given an integer array A. You have to find the second largest element/value in the array or report that no such element exists.



// Problem Constraints
// 1 <= |A| <= 105

// 0 <= A[i] <= 109



// Input Format
// The first argument is an integer array A.



// Output Format
// Return the second largest element. If no such element exist then return -1.



// Example Input
// Input 1:

//  A = [2, 1, 2] 
// Input 2:

//  A = [2]


// Example Output
// Output 1:

//  2 
// Output 2:

//  -1 


// Example Explanation
// Explanation 1:

//  First largest element = 2
//  Second largest element = 2
//  Third largest element = 1
// Explanation 2:

//  There is no second largest element in the array.

function nextBiggest(A) {
    let max = -Infinity, secondMax = -Infinity;
    let n;
    if(A.length === 1)
        return -1;
    for(let i of A) {
        n = Number(i)
        if(n > max) {
            secondMax = max; 
            max = n;
        } else if(secondMax < n && n <= max)  {
            secondMax = n
        }
    }
    return secondMax;
}

const arr = [589074291, 589074291, 589074291, 589074291];
console.log(nextBiggest(arr));
