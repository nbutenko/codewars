function positiveSum(arr) {
    let sum = 0;
    for(let i=0;i<arr.length;i++){
        sum += arr[i] > 0 ? arr[i] : 0;
    }
    return sum;
}