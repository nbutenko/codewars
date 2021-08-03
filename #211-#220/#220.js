function CalculateString( n,  nums){
    let countZero = nums.split('').filter(el => el === '0').length;
    let countOne = nums.length - countZero;
    return Math.abs(countZero - countOne);
}