function fiveLine(s){
    s=s.trim();
    let res = ''
    for(let i = 1;i<=5;i++){
        for(let k=1;k<=i;k++) res+=s;
        res+='\n';
    }
    return res.trim();
}