
function countDuplicates(string) {
    let counts = {};
    let result = {};
    let array = string.toLowerCase().split('');
    for(let i of array) {
        if(counts[i] === undefined) {
            counts[i] = 1;
        }
        else {
            counts[i]++;
            result[i] = counts[i];
        }
    }

    return result;
}

console.log(countDuplicates('Aabbcde'));
