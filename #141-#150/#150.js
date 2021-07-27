function skiponacci(n) {
    if(n === 1) return 1;
    let arr = [1, 1];
    for(let i = 1;arr.length < n;i++){
        arr.push(arr[i] + arr[i-1]);
    }
    return arr.map((el, index) => index % 2 ? el = 'skip' : el).join(' ');
}