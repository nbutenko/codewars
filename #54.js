function find_average(array) {
    if(!array.length) return 0;
    let sum = 0;
    for(let i=0;i<array.length;i++){
        sum+=array[i];
    }
    return sum/array.length;
}