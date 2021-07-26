const validateWord = s => {
    let arr = Array(...s.toLowerCase());
    let count = arr.filter(el => el === arr[0]).length;
    return arr.every(char => arr.filter(el => el === char).length === count);
}