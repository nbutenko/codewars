function minSum(arr) {
    arr.sort((a,b) => b-a);
    let sum = 0;
    for(let i=0;i<arr.length/2;i++){
        sum += arr[i]*arr[arr.length-1-i];
    }
    return sum;
}