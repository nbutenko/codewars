function solution(digits){
    let max = +digits.slice(0,5);
    for(let i = 1, k = 6;i<digits.length;i++, k++){
        let temp = +digits.slice(i, k);
        if(temp > max) max = temp;
    }
    return max;
}