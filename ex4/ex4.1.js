
let fibMem = {
    0: 0,
    1: 1,
    2: 1,
};

function fibonacci(number) {
    let result = 1;
    for(let i = 2; i <= number; ++i) {
        result = fibMem[i - 1] + fibMem[i - 2];
        fibMem[i] = result;
    }
    return fibMem[number];
}

for(let i = 1; i < 1000; ++i) {
    console.log(fibonacci(i));
}


