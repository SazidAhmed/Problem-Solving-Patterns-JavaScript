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

factorial(3)

// 3 * 2 * 1 = 6