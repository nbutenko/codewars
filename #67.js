const removeSmallest = numbers => numbers.filter((el, index) => index !== numbers.indexOf(Math.min(...numbers)));