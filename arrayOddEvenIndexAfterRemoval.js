const test = (A) => {
           // Total sum of even indices = Total sum of odd indices
           // If we remove index at i,
           // Total Sum of even indices = Seven[0, i - 1] + Sodd[i + 1, N - 1]
           // Total Sum of odd indices = Sodd[0, i - 1] + Seven[i + 1, N - 1]
   
           // Seven[0, i - 1] = PrefixEven[i - 1]
           // Seven[L,R] = PrefixEven[R] - PrefixEven[L - 1]
           // same formula as above for odd calculation
   
        //    let prefixEven = [], prefixOdd = [];
        //    prefixEven[0] = A[0];
        //    prefixOdd[0] = 0;
   
        //    for(let i = 1; i < A.length; i++) {
        //        if(i % 2 === 1) {
        //            prefixEven[i] = prefixEven[i - 1]
        //        } else {
        //            prefixEven[i] = prefixEven[i - 1] + A[i]
        //        }
        //    }
   
        //    for(let i = 1; i < A.length; i++) {
        //        if(i % 2 === 0) {
        //            prefixOdd[i] = prefixOdd[i - 1]
        //        } else {
        //            prefixOdd[i] = prefixOdd[i - 1] + A[i]
        //        }
        //    }

        // //    console.log("dfs",prefixEven, prefixOdd)
           
        //    let count = 0;
        //    let totalSumEven = prefixEven[0];
        //    let totalSumOdd = 0; 
        //    for(let i = 0; i < A.length; i++) {
        //        if(i === 0) {
        //             totalSumEven = prefixEven[0];
        //             totalSumOdd = 0;
        //        } else {
        //             totalSumEven = prefixEven[i - 1] + prefixOdd[A.length - 1] - prefixOdd[i];
        //             totalSumOdd = prefixOdd[i - 1] + prefixEven[A.length - 1] - prefixEven[i];
        //        }
        //        console.log("v d", totalSumEven, totalSumOdd)
        //        if(totalSumEven === totalSumOdd) {
        //            count++
        //        }
        //    }
   
        //    return count;

    n = A.length;
        // If size of the array is 1
    if (n == 1) {
        return 1;
    }
 
    // If size of the array is 2
    if (n == 2)
        return 0;
 
    // Stores sum of even-indexed
    // elements of the given array
    let sumEven = 0;
 
    // Stores sum of odd-indexed
    // elements of the given array
    let sumOdd = 0;
 
    // Traverse the array
    for (let i = 0; i < n; i++) {
 
        // If i is an even number
        if (i % 2 == 0) {
 
            // Update sumEven
            sumEven += A[i];
        }
 
        // If i is an odd number
        else {
 
            // Update sumOdd
            sumOdd += A[i];
        }
    }
 
    // Stores sum of even-indexed
    // array elements till i-th index
    let currOdd = 0;
 
    // Stores sum of odd-indexed
    // array elements till i-th index
    let currEven = A[0];
 
    // Stores count of indices whose
    // removal makes sum of odd and
    // even indexed elements equal
    let res = 0;
 
    // Stores sum of even-indexed elements
    // after removing the i-th element
    let newEvenSum = 0;
 
    // Stores sum of odd-indexed elements
    // after removing the i-th element
    let newOddSum = 0;
 
    // Traverse the array
    for (let i = 1; i < n - 1; i++) {
 
        // If i is an odd number
        if (i % 2) {
 
            // Update currOdd
            currOdd += A[i];
 
            // Update newEvenSum
            newEvenSum = currEven + sumOdd
                        - currOdd;
 
            // Update newOddSum
            newOddSum = currOdd + sumEven
                        - currEven - A[i];
        }
 
        // If i is an even number
        else {
 
            // Update currEven
            currEven += A[i];
 
            // Update newOddSum
            newOddSum = currOdd + sumEven
                        - currEven;
 
            // Update newEvenSum
            newEvenSum = currEven + sumOdd
                        - currOdd - A[i];
        }
 
        // If newEvenSum is equal to newOddSum
        if (newEvenSum == newOddSum) {
 
            // Increase the count
            res++;
        }
    }
 
    // If sum of even-indexed and odd-indexed
    // elements is equal by removing the first element
    if (sumOdd == sumEven - A[0]) {
 
        // Increase the count
        res++;
    }
 
    // If length of the array
    // is an odd number
    if (n % 2 == 1) {
 
        // If sum of even-indexed and odd-indexed
        // elements is equal by removing the last element
        if (sumOdd == sumEven - A[n - 1]) {
 
            // Increase the count
            res++;
        }
    }
 
    // If length of the array
    // is an even number
    else {
 
        // If sum of even-indexed and odd-indexed
        // elements is equal by removing the last element
        if (sumEven == sumOdd - A[n - 1]) {
 
            // Increase the count
            res++;
        }
    }
 
    return res;
   
}

console.log(test([2, 1, 6, 4]))
console.log(test([1,1,1]))
console.log(test([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]))
   