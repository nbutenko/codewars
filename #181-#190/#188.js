const calculate = string => string.split(' ').filter(el => !Number.isNaN(+el)).reduce((a,b) => string.includes('loses')? +a - +b : +a + +b)