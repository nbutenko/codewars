function cleanString(s) {
    let arr = Array(...s);
    for(let i=0;i<arr.length;i++){
        if(arr[i] === '#'){
            arr = arr.filter((el, index) => index !== i && index !== i-1);
            i-=2;
        }
    }
    return arr.length ? arr.reduce((a, b) => a+b) : '';
}