function multiples(s1,s2,s3){
    let res = [];
    let step = s1>s2 ? s1 : s2;
    for(let i = step;i<s3;i+=step) if(!(i%s1) && !(i%s2)) res.push(i);
    return res;
}