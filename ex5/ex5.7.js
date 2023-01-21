
function shortestWords(string) {
    let words = string.split(' ');
    let length = words[0].length;
    for(let i of words) {
        if(i.length < length) length = i.length;
    }
    return length;
}

console.log(shortestWords('Hello World hi noo'));
