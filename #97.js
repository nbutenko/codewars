function mergeArrays(a, b) {
    let res = [];
    let loopLength = a.length > b.length ? a.length : b.length;
    for(let i = 0;i<loopLength;i++){
        if(a[i]) res.push(a[i]);
        if(b[i]) res.push(b[i]);
    }
    return res;
}