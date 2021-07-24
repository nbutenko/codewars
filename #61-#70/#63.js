const sumArray = array => Array.isArray(array) && array.length > 1 ? array.reduce((a, b) => a+b) - Math.max(...array) - Math.min(...array) : 0;
