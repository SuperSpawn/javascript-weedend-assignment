
// I would like to thank gauss for this crazy math trick 
function summation(number) {
    let result;
    result = number * (number + 1);
    result >>= 1;
    return result;
}

console.log(summation(2));
console.log(summation(8));
console.log(summation(3));
console.log(summation(1000));



