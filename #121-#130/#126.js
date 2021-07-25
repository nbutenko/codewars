function arithmeticSequenceElements(a,r,n) {
    let arr = [];
    for(let i = a;arr.length<n;i+=r) arr.push(i);
    return arr.join(', ');
}