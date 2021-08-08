function permuteAPalindrome (input) {
    input = input.split('').sort();
    let res = 0;
    for(let i=0;i<input.length;i++){
        if(input[i] !== input[i+1]) res++;
        else ++i;
    }
    return res <= 1;
}