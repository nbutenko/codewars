const noRepeat = str => {
    let arr = Array(...str);
    return arr.filter(el => arr.indexOf(el) === arr.lastIndexOf(el))[0];
}