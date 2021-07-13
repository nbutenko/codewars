function squares(x, n) {
    if(n<=0) return [];
    let arr = [x];
    while(arr.length < n) {
        arr.push(Math.pow(x, 2));
        x = arr[arr.length-1];
    }
    return arr;
}