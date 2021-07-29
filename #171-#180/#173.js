function XO(str) {
    let countO = str.split('').filter(el => el.toLowerCase() === 'o').length;
    let countX = str.split('').filter(el => el.toLowerCase() === 'x').length;
    return countO === countX;
}