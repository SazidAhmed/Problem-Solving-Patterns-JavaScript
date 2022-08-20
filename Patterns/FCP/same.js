// Write a function called same which accepts two arrays. 
// The function should return true if every value in the array
// has its corresponding value squared in the secord array. 
// The frequency of values must be the same.
// same([1,2,3],[4,1,9])
// same([1,2,3],[4,1]) 

function same(arr1, arr2) {
    if (arr1.length != arr2.length) {
        return false;
    }

    let counter1 = {}
    let counter2 = {}

    // for (let i = 0; i < arr1.length; i++) {
    //     counter1[arr1[i]] = (counter1[arr1[i]] || 0) + 1;
    // }

    for(let val of arr1){
        counter1[val] = (counter1[val] || 0) + 1
    }

    for(let val of arr2){
        counter2[val] = (counter2[val] || 0) + 1
    }

    console.log(counter1);
    console.log(counter2);

    for(let key in counter1){
        console.log(key);
        if(!(key ** 2 in counter2)){
            return false;
        }
        console.log(key ** 2);
        console.log(counter2[key ** 2]);
        if(counter2[key ** 2] !== counter1[key]){
            return false
        }
    }
    console.log('true');
    return true
}

same([1,2,3,3], [1,4,9,9])
