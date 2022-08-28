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

console.log(factorial(3))