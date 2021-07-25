function solve(arr){
    arr.sort((a,b) => b-a);
    let res = [];
    do {
        res.push(arr[0], arr[arr.length-1]);
        arr.shift();
        arr.pop();
    }
    while(arr.length>1);
    return res.concat(arr);
}