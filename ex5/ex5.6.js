
function maskify(string) {
    let array = string.split('');
    if(array.length <= 4) return string;
    for(let i= 0; i < array.length - 4; ++i) {
        array[i] = '#';
    }
    return array.join('');
}

console.log(maskify("5545343526645545616"));