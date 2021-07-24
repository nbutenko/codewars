function swapTwo(array, a, b) {
    let indexA = array.indexOf(a);
    let indexB = array.lastIndexOf(b);
    let newArr = array.slice(0);
    newArr[indexA] = b;
    newArr[indexB] = a;
    return newArr;
}