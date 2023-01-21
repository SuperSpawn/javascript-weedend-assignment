
function findUnique(array) {
    let result;
    let common;
    if(array[0] === array[1]) {     //first element cant be unique
        vote = 2;
        common = array[0];
    }
    else { 
        if(array[0] === array[2]) return array[1]; // found you
        else return array[0]; // first element must be the unique element
    }

    for(let i of array) {
        if(i !== common) return i; //found you
    }
}

console.log(findUnique([1,1,1,2,1,1]));
console.log(findUnique([0,0,0.55,0,0]));
console.log(findUnique([1,1,2]));
console.log(findUnique([1,2,1]));
console.log(findUnique([2,1,1]));





