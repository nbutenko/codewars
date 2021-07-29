function solve(s){
    let lowerCase = s.toLowerCase = s.toLowerCase();
    let upperCase = s.toUpperCase();
    let countLower = 0;
    let countUpper = 0;
    for(let i = 0;i<s.length;i++){
        if(s[i] === lowerCase[i]) countLower++;
        else countUpper++;
    }
    return countUpper > countLower ? upperCase : lowerCase;
}