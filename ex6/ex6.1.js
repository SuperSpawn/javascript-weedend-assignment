
function accum(string) {
    let array = string.toLowerCase().split('');
    let resultArray = [];

    for(let i in array) {
        let letter = array[i].toUpperCase();
        for(let j = 0; j < i; ++j) {
            letter += array[i];
        }
        resultArray.push(letter);
    }


    return resultArray.join('-');
}


console.log(accum('RqaEzty'));
