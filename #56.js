function divCon(x){
    let sumOfIntegers = 0
    let sumOfStrings = 0;
    for(let i=0;i<x.length;i++) {
        if(Number.isInteger(x[i])) sumOfIntegers += x[i];
        else sumOfStrings += +x[i];
    }
    return sumOfIntegers-sumOfStrings;
}