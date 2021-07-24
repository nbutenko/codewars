function consecutive(arr) {
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    let count = 0;
    for(let i = min+1;i<max;i++) {
        if(!arr.includes(i)) count++;
    }
    return count;
}