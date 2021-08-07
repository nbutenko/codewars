function countWords(str){
    let res = {};
    let arr = str.toLowerCase().split(' ');
    for(let i = 0; i<arr.length;i++){
        if(!res[arr[i]]) res[arr[i]] = 1;
        else res[arr[i]] += 1;
    }
    return res;
}