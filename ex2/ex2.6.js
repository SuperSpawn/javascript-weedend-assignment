
function findCentury(year) {
    let centuryOffset = year % 100;
    let century = year - centuryOffset;
    century /= 100;
    if(centuryOffset) century++;
    return century;
}

console.log(findCentury(1705));
console.log(findCentury(1900));
console.log(findCentury(1601));
console.log(findCentury(2000));

