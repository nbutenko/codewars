const redarr = arr => {
    let res = {};
    arr = arr.filter((el, index) => index === arr.indexOf(el)).sort();
    for(let i = 0;i < arr.length;i++) res[i] = arr[i];
    return res;
}