
function trimString(str) {
    let array = str.split('');
    array.shift();
    array.pop();
    return array.join('');
}

console.log(trimString('hello world'));