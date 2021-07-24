function generatePairs(n) {
    let res = [];
    for(let i=0;i<=n;i++){
        for(let k = i;k<=n;k++) res.push([i, k]);
    }
    return res;
}