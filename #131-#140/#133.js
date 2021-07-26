function solve(arr){
    let res = [];
    for(let i = 0;i<arr.length;i++){
        if(arr.slice(i+1,arr.length).every(el => el<arr[i])) res.push(arr[i])
    }
    return res;
};