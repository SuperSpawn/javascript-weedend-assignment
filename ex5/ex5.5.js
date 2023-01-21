

function abbreviateTwoWords(string) {
    let words = string.split(' ');
    let result = [];
    let firstWord = words[0].split('');
    let secondWord = words[1].split('');
    result[0] = firstWord[0].toUpperCase();
    result[1] = '.';
    result[2] = secondWord[0].toUpperCase();
    result[3] = '.';
    return result.join('');;
}   

console.log(abbreviateTwoWords('Talal Zoabi'));