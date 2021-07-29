var uniqueInOrder=function(iterable){
    let res = [];
    let curr = null;
    for(let i = 0;i<iterable.length;i++){
        if(curr !== iterable[i]){
            res.push(iterable[i]);
            curr = iterable[i];
        }
    }
    return res;
}