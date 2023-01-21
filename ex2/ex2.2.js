

function arrayToBinary(array) {
    let result = 0;
    let currentPower = 1;
    array.reverse();
    for(let i of array) {
        if(i) result += currentPower;
        currentPower <<= 1;
    }
    array.reverse();
    return result;
}

console.log(arrayToBinary([0,1,1,1,1]));
