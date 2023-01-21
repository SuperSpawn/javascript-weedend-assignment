

function findNextPerfectSquare(square) {
    let result = Math.sqrt(square);
    if(Math.floor(result) !== result) return -1; //not a perfect square
    result++;
    return result * result;
}


console.log(findNextPerfectSquare(121));
console.log(findNextPerfectSquare(625));
console.log(findNextPerfectSquare(114));



