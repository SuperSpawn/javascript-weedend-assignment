
function organizeString(string) {
    let array = string.toLowerCase().split('');
    let result = {};
    for(let i of array) {
        result[i] = true;
    }
    array = Object.keys(result);
    array.sort(function (a, b) {
        return a.charCodeAt(0) - b.charCodeAt(0);
    });
    return array;
}

function organizeStrings(s1, s2) {
    console.log()
    return organizeString(s1 + s2);
}

console.log(organizeStrings('xyaabbbccccdefww', 'xxxxyyyyabklmopqwxy'))