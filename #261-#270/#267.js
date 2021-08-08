const count = array => {
    let res = {};
    for(let i = 0; i<array.length; i++) {
        if(!res[array[i]]) res[array[i]] = 1;
        else res[array[i]] += 1;
    }
    return res;
}