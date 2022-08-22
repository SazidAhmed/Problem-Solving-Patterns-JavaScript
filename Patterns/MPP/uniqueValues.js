function countUniqueValues(arr){
    if(arr.length === 0) return 0;
    var i = 0;
    for(j = 1; j < arr.length; j++){
        console.log('i, j : ',arr[i], arr[j]);

        if(arr[i] !== arr[j]){
            i++;
            arr[i] = arr[j];
        }

        console.log('array : ', arr)
    }
    const uniqueValues = i + 1;
    console.log('Result : ',uniqueValues)
    return uniqueValues;

}

countUniqueValues([1,1,2,2,3,4])
// countUniqueValues([1,2,3,4,3,4])