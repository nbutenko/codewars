function mean(lst){
    let numbers = lst.filter(el => Number.isInteger(+el));
    let characters = lst.filter(el => !numbers.includes(el));
    return [
        numbers.reduce((acc, curr) => +acc+ +curr,0)/numbers.length,
        characters.join('')
    ]
}