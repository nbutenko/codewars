const peak = arr => {
    let res = arr.map((el, index) => arr.slice(0,index).reduce((a,b) => a+b,0) === arr.slice(index+1,arr.length).reduce((a,b) => a+b,0) ? index : '');
    return res.filter(el => el).length ? res.filter(el => el)[0] : -1;
}