// POWER SOLUTION
function power(base, exponent){
    if(exponent === 0) return 1;
    console.log(base * power(base,exponent-1))
    return base * power(base,exponent-1);
}

// power(2,2)

// FACTORIAL SOLUTION
function factorial(x){
    if (x < 1 ) return 0;
    if (x === 1 ) return 1;
    return x * factorial(x-1);
}

// console.log(factorial(3))

// PRODUCT OF ARRAY SOLUTION
function productOfArray(arr) {
    if(arr.length === 0) {
        return 1;
    }
    return arr[0] * productOfArray(arr.slice(1));
}

console.log(productOfArray([1,2,4]))

// RECURSIVE RANGE SOLUTION
function recursiveRange(x){
    if (x === 0 ) return 0;
    return x + recursiveRange(x-1);
}

console.log(recursiveRange(5))

// return 5 + recursiveRange(4);
//             return 4 + recursiveRange(3);
//                         return 3 + recursiveRange(2);
//                                     return 2 + recursiveRange(1);
//                                                 return 1 + recursiveRange(0);


// FIBONACCI SOLUTION
function fib(n){
    if (n <= 2) return 1;
    return fib(n-1) + fib(n-2);
}

fib(3)