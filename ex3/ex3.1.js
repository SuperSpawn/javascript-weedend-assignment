
function nb_year(p0, percent, aug, p) {
    let population = p0;
    let year = 0;
    while(population < p) {
        population += population * (percent / 100);
        population += aug;
        ++year;
    }
    return year;
}

console.log(nb_year(1500, 5, 100, 5000));
console.log(nb_year(1500000, 2.5, 10000, 2000000));



