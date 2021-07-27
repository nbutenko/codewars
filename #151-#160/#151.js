function rounders(value) {
    let arr = [...(value.toString())];
    for(let i = arr.length-1;i>0;i--){
        if(arr[i] >= 5) arr[i-1]++;
        arr[i] = 0;
    }
    return +arr.join('');
}