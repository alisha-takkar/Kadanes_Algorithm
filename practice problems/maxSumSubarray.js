// The input is an array of numbers, e.g. arr = [1, -2, 3, 4, -9, 6].

// The task is: find the contiguous subarray of arr with the maximal sum of items.

// Write the function getMaxSubSum(arr) that will return that sum.

// For instance:

// getMaxSubSum([-1, 2, 3, -9]) == 5 (the sum of highlighted items)
// getMaxSubSum([2, -1, 2, 3, -9]) == 6
// getMaxSubSum([-1, 2, 3, -9, 11]) == 11
// getMaxSubSum([-2, -1, 1, 2]) == 3
// getMaxSubSum([100, -9, 2, -3, 5]) == 100
// getMaxSubSum([1, 2, 3]) == 6 (take all)
// getMaxSubSum([-1, -2, -3]) = -1

function getMaxSubSum(arr){
    let maxCurrent = maxGlobal = arr[0];

    for(let i=1; i<arr.length; i++){
        maxCurrent = Math.max(arr[i] , maxCurrent + arr[i]);
        if(maxCurrent > maxGlobal){
            maxGlobal = maxCurrent;
        }
    }
    return maxGlobal;
}

alert(getMaxSubSum([-1, 2, 3, -9]));           //5
alert(getMaxSubSum([2, -1, 2, 3, -9]));        //6
alert(getMaxSubSum([-1, 2, 3, -9, 11]));       //11
alert(getMaxSubSum([-2, -1, 1, 2]));           //3
alert(getMaxSubSum([100, -9, 2, -3, 5]));      //100
alert(getMaxSubSum([1, 2, 3]));                //6
