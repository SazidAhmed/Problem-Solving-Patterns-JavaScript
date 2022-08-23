function maxSubarraySum(arr, num){
    let maxSum = 0;
    let tempSum = 0;

    for (let i = 0; i < num; i++){
        maxSum += arr[i];
    }

    tempSum = maxSum;
    for(let i = num; i < arr.length; i++){
        tempSum = tempSum - arr[i-num] + arr[i];
        maxSum = Math.max(maxSum, tempSum)
    }
    console.log(maxSum);
    return maxSum;
}

// maxSubarraySum([1,2,3,2,1,2,4,5,6,2,5], 3)
maxSubarraySum([1,2,3,2,1,2,4,5,6,2,5], 3) 