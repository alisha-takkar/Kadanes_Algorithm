// Given an array of integers (possibly some elements negative), 
// write a program to find out the *maximum product* possible by
// multiplying ‘n’ consecutive integers in the array where n ≤ ARRAY_SIZE.
// Also, print the starting point of the maximum product subarray.


function maxProduct(arr){
    let maxGlobal = maxCurrent = arr[0];
    let start =0;
    for(let i=1; i<arr.length; i++){
        maxCurrent = Math.max(arr[i], maxCurrent * arr[i]);

        if(maxCurrent > maxGlobal){
            maxGlobal = maxCurrent;
            start = i;
        }
    }
    alert("The max product is: " + maxGlobal);
    alert("Starting index: " + start);
}

maxProduct([-2,1,-3,4,-1,2,1,-5,4]);
maxProduct([5,4,-1,7,8]);