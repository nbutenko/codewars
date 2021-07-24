function sumOfN(n) {
    let res = [0];
    for(let i = 1;i<=Math.abs(n);i++){
        for(let k=0, sum = 0;k<=i;k++) sum+=k;
        res.push(sum);
    }
    if(n>0) return res;
    for(let i = 1;i<res.length;i++) res[i] = -res[i];
    return res;
}