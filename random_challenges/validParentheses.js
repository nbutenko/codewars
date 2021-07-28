function validParentheses(str){
    if(str.length%2 || str[0] === ')' || str[str.length-1] === '(') return false;

    let countLeft = 0;
    let countRight = 0;
    for(let i = str.length/2-1, k = str.length/2;i>=0;i--, k++){
        if(str[i] === '(' || str[k] === '(') countLeft++;
        if(str[i] === ')' || str[k] === ')') countRight++
    }
    return countLeft === countRight;
}