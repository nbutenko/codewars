const multi = arr => arr.reduce((acc, curr) => acc*curr,1)
const add = arr => arr.reduce((acc, curr) => acc+curr,0)
const reverse = str => Array(...str).reverse().join('');