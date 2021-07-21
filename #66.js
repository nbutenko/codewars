const gimme = inputArray => {
    let maxIndex = inputArray.indexOf(Math.max(...inputArray));
    let minIndex = inputArray.indexOf(Math.min(...inputArray));
    return inputArray.indexOf(inputArray.filter((el, index) => index !== maxIndex && index !== minIndex)[0]);
};