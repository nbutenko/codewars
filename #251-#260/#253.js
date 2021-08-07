function giveMeFive(obj){
    const res = [];
    for (let key in obj) {
        if(key.length === 5) res.push(key)
        if(obj[key].length === 5) res.push(obj[key])
    }
    return res;
}