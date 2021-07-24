function sumOfMinimums(arr) {
    let i = 0;
    let sum = 0;
    while(i < arr.length) {
        sum += Math.min(...arr[i])
        i++;
    }
    return sum;
}