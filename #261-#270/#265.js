function testResult(array) {
    const avg = +(array.reduce((a,b) => a+b)/array.length).toFixed(3);
    const obj = {
        h: array.filter(el => el > 8).length,
        a: array.filter(el => el > 6 && el <=8).length,
        l: array.filter(el => el <= 6).length
    }
    const well = array.filter(el => el > 8).length === array.length;
    let res = [avg, obj];
    if(well) res.push('They did well')
    return res;
}