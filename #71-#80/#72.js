function findMultiples(integer, limit) {
    let counter = 1;
    let res = [];
    for(let i=integer;i<=limit;counter++, i=integer*counter) res.push(i);
    return res;
}