function squareDigits(num){
    let str = num.toString();
    let newStr = '';
    for(let i=0;i<str.length;i++) {
        newStr += Math.pow(+str[i], 2);
    }
    return +newStr;
}