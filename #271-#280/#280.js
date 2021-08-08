const numberOfPairs = (gloves, pairs = 0) => {
    let arr = gloves.filter((el, index) => gloves.indexOf(el) !== gloves.lastIndexOf(el))
    if(arr.length) {
        ++pairs;
        arr = arr.slice(1, arr.lastIndexOf(arr[0])).concat(arr.slice(arr.lastIndexOf(arr[0]) + 1));
        if(arr.length) return numberOfPairs(arr, pairs);
    }
    return pairs;
}