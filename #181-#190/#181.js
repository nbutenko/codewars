function add(num1, num2) {
    num1 = num1.toString();
    num2 = num2.toString();
    let res = '';

    if(num1.length > num2.length) {
        num2 = num2.padStart(num1.length, '0');
    }
    else if(num1.length < num2.length){
        num1 = num1.padStart(num2.length, '0');
    }

    for(let i=0;i<num1.length;i++) res += (+num1[i] + +num2[i]);
    return +res;
}