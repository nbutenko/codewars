const highAndLow = numbers => {
    let arr = numbers.split(' ').map(el => +el);
    return `${Math.max(...arr)} ${Math.min(...arr)}`;
}