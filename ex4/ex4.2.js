
let fibMem = {
    0: 0,
    1: 1,
    2: 1,
    3: 2,
};

function tribonacci(number, signature) {
    let result = 1;
    let steps = [];
    fibMem[0] = signature[0];
    fibMem[1] = signature[1];
    fibMem[2] = signature[2];

    if(number === 0) return [];
    if(number === 1) {
        steps[0] = signature[0];
        return steps;
    }
    if(number === 2) {
        steps[0] = signature[0];
        steps[1] = signature[1];
        return steps;
    }
    steps[0] = signature[0];
    steps[1] = signature[1];
    steps[2] = signature[2];

    for(let i = 3; i <= number; ++i) {
        result = fibMem[i - 1] + fibMem[i - 2] + fibMem[i - 3];
        fibMem[i] = result;
        steps[i] = result;
    }
    return steps;
}

console.log(tribonacci(20, [0,0,1]));

