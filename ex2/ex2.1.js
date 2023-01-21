
function sumOfLowestNumbers(array) {
    //there should be at least 2 elements
    let min = array[0];
    let prevMin = array[1];
    for( let i of array ) {
        if(i < min) {
            //the previous min value is the second smallest element
            prevMin = min;
            min = i;
        }
    }
    return min + prevMin;//the minimum and the other smallest value
}


console.log(sumOfLowestNumbers([19,5,42,2,77]));
