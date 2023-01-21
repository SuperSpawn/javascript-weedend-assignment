

function Map(array, func) {
    let result = [];
    for(let i in array) {
        result.push(func(array[i], i, array));
    }
    return result;
}

