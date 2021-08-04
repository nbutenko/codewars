const removeConsecutiveDuplicates = s => {
    let arr = s.split(' ');
    let res = [];
    for(let i = 0;i<arr.length;i++){
        if(arr[i] !== arr[i-1]) res.push(arr[i])
    }
    return res.join(' ');
}