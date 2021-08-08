function mostFrequentElement(arr){
    let count = arr.map(el => arr.filter(e => e === el).length);
    let max = Math.max(...count);
    return arr.filter((el, index) => count[index] === max).filter((el, i, list) => i === list.indexOf(el)).sort();
}