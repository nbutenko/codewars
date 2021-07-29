function countZeros(n) {
    let count = 0;
    for(let i=1;i<=n;i++) {
        if(i.toString().includes('0')) count += i.toString().split('').filter(el => el === '0').length;
    }
    return count;
}