function polydivisible(x) {
    x = x+'';
    for(let i = 1;i<=x.length;i++){
        if(+x.slice(0,i) % i) return false;
    }
    return true;
}