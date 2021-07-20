function countPositivesSumNegatives(input) {
    if(!input || !input.length) return [];
    let sumPositive = 0;
    let sumNegative = 0;
    for(let i=0;i<input.length;i++){
        if(input[i] > 0) sumPositive ++;
        else sumNegative += input[i];
    }
    return [sumPositive, sumNegative];
}