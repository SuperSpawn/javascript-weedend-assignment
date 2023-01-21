
function isIsogram(string) {
    let array = string.toLowerCase().split('');
    let counts = {};
    for(let i of array) {
        if(counts[i] === undefined){
            counts[i] = true;
        }
        else return false;
    }
    return true;
}