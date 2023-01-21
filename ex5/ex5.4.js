
function toWeirdCase(string) {
    let array = string.split('');
    for(let i in array) {
        if(i % 2 === 0) {
            array[i] = array[i].toUpperCase();
        }
        else array[i] = array[i].toLowerCase();
    }
    return array.join('');
}

console.log(toWeirdCase("String"));
