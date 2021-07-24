const completeSeries = arr => {
    let res = []
    if(arr.length === arr.filter((el, index) => index === arr.indexOf(el)).length) {
        for(let i = 0;i<=Math.max(...arr);i++) res.push(i);
    } else res.push(0);
    return res;
}