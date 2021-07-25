function sumOrProduct(array, n) {
    let sum = array.sort((a,b) => a-b).slice(-n).reduce((a, b) => a+b);
    let product = array.slice(0, n).reduce((a,b) => a*b);
    return sum > product ? 'sum' : sum < product ? 'product' : 'same';
}