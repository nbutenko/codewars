function arrayMadness(a, b) {
    let sumA = a.reduce((acc, curr) => acc+Math.pow(curr, 2), 0);
    let sumB = b.reduce((acc, curr) => acc+Math.pow(curr,3), 0);
    return sumA>sumB;
}