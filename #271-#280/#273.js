function f(x, cc) {
    let flag = false;
    for(let key in cc){
        if(flag) return cc[key];
        if(cc[key] === x) flag = true;
    }
    return cc.a;
}