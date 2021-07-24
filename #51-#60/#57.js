function cubeOdd(arr) {
    let notNumbers = arr.filter(el => !Number.isInteger(el));
    if(notNumbers.length) return undefined;

    let sum = 0;
    arr = arr.filter(el => el%2);
    for(let i=0;i<arr.length;i++){
        sum += arr[i]**3;
    }
    return sum;
}