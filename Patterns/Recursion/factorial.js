// function factorial(num){
//     let total = 1;
//     for (let i = num; i > 1; i--){
//         total = total * i;
//     }
//     console.log(total)
// }

// factorial(3)

function factorial(num){
    if(num === 1){
        return 1;
    }
    console.log(num * factorial(num-1))
    return num * factorial(num-1)
}

// factorial(3)

// 3 * 2 * 1 = 6

// PRODUCT OF ARRAY SOLUTION
function productOfArray(arr) {
    if(arr.length === 0) {
        return 1;
    }
    return arr[0] * productOfArray(arr.slice(1));
}

productOfArray([1,2,3,4])