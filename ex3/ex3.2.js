


function peopleLeftInBus(matrix) {
    let peopleOnTheBus = 0;
    for(let i of matrix) {
        peopleOnTheBus += i[0];
        peopleOnTheBus -= i[1];
        if(peopleOnTheBus < 0) peopleOnTheBus = 0;
    }
    return peopleOnTheBus;
}
