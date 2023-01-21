
function Filter(array, func) {
    let result = [];
    for(let i of array) {
        if(func(i)) result.push(i);
    }
    return result;
}

console.log(Filter([1,2,3,4,5,6,7,8], number => number > 6));


