function calc_ms(n) {
    let countCubes = 1;
    for(let i=1;i<=n;i++) {
        countCubes = countCubes * 27 - countCubes*7;
    }
    return countCubes;
}

function calc_ms2(n) {
    return Math.pow(20, n);
}