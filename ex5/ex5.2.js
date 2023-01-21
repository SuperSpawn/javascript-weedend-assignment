
function stringRepeat(number, string) {
    let result = [];
    for (let i = 0; i < number; ++i) {
        result.push(string);
    }
    return result.join('');
}

console.log(stringRepeat(6, "l"));
console.log(stringRepeat(5, "Hello"));
