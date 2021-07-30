function dontGiveMeFive(start, end) {
    let arr = [];
    do{
        arr.push(start);
        start++;
    } while(start<=end);
    return arr.filter(el => !el.toString().includes('5')).length;
}