function solve(a,b){
    let res = [];
    for(let i=0;i<b.length;i++){
        let counter = 0;
        for(let k=0;k<a.length;k++) if(a[k] === b[i]) counter++;
        res.push(counter);
    }
    return res;
}