//Helper methods recursion

// function collectOdds(arr){
//     let result = [];

//     function helper(helperInput){
//         if(helperInput.length ===0 ){
//             return;
//         }

//         if(helperInput[0] % 2 !==0){
//             result.push(helperInput.slice(1))
//         }

//         helper(arr)
//         console.log(result)
//         return result;
//     }
// }


//pure recursion
function collectOdds(arr){
    let newArr = [];

    if(arr.length ===0){
        return newArr;
    }

    if(arr[0] % 2 == 0){
        newArr.push(arr[0]);
    }

    newArr = newArr.concat(collectOddValues(arr.slice(1)));
    console.log(newArr)
    return newArr;
}

collectOdds([1,2,3,4,5])
// [1].concat(collectOddValues([2,3,4,5]));
//             [].concat(collectOddValues([3,4,5]));
//                         [3].concat(collectOddValues([4,5]));
//                                     [].concat(collectOddValues([5]));
//                                                 [5].concat(collectOddValues([]));
