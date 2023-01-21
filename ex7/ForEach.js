

function ForEach(array, func) {
    for(let i in array) {
        func(array[i], i, array);
    }
    return undefined;
}
