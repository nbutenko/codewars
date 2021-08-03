const palindromeChainLength = n => {
    const reverseStr = num => num.toString().split('').reverse().join('');
    let count = 0;
    let reverse = reverseStr(n);

    while(n.toString() !== reverse){
        count++;
        n += +reverse;
        reverse = reverseStr(n);
    }
    return count;
};

var palindromeChainLength2  = function(n) {
    var x = parseInt( (""+n).split('').reverse().join('') );
    if(n !== x){
        return 1 + palindromeChainLength (n + x);
    }
    return 0;
};