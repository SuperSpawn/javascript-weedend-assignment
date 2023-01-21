

function toCamelCase(string) {
    let words = string.split('-');
    if(words.length === 1) words = string.split('_');
    for(let i = 1; i < words.length; ++i) {
        let word = words[i].split('');;
        word[0] = word[0].toUpperCase();
        words[i] = word.join('');
    }
    return words.join('');
}

console.log(toCamelCase('the_silent_assassin'));