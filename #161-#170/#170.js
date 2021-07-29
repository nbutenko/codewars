function pattern(n){
    let res = '1\n';
    for(let i = 1;i<n;i++){
        res+='1';
        for(let k=0;k<i;k++) res+='*'
        res+=i+1;
        if(i!==n-1) res+='\n';
    }
    return res;
}