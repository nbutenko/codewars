function squareOrSquareRoot(array) {
    for(i=0;i<array.length;i++) {
        array[i] = !(Math.pow(array[i], 0.5) % 1) ? Math.pow(array[i], 0.5) : Math.pow(array[i], 2);
    }
    return array;
}