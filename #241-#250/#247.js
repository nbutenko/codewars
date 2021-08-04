function digits(num){
    num = num.toString();
    let res = [];
    for(let i = 0;i<num.length-1;i++){
        for(let k = i+1;k<num.length;k++){
            res.push(+num[i] + +num[k]);
        }
    }
    return res;
}