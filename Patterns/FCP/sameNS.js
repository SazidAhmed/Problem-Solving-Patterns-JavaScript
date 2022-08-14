// Write a function called same which accepts two arrays. 
// The function should return true if every value in the array
// has its corresponding value squared in the secord array. 
// The frequency of values must be the same.
// same([1,2,3],[4,1,9])
// same([1,2,3],[4,1]) 

function same(arr1, arr2){
    if (arr1.length !== arr2.length) {
        console.log('Length mismatch: ' + arr1.length + ' ' + arr2.length);
        return false;
    }
    
    for(let i = 0; i < arr1.length; i++){
        let correctIndex = arr2.indexOf(arr1[i] ** 2)
        if(correctIndex === -1) {
            return false;
        }
        console.log(arr2);
        arr2.splice(correctIndex,1)
    }
    console.log('true')
    return true;
}

same([1,2,3], [1,4,9])