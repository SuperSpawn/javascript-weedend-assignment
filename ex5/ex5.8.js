

function longestWords(string) {
    let words = string.split(' ');
    let longest = [];
    let length = words[0].length;
    for(let i of words) {
        if(i.length > length) length = i.length;
    }
    for(let i of words) {
        if(i.length === length) longest.push(i);
    }
    return longest;
}

console.log(longestWords('hi hello hello world'));