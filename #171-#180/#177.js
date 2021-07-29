function accum(s) {
    let res = s[0].toUpperCase()+'-';
    for(let i = 1;i<s.length;i++){
        res+=s[i].toUpperCase();
        for(let k = i;k>0;k--) res+=s[i].toLowerCase();
        if(i !== s.length-1) res+='-';
    }
    return res;
}