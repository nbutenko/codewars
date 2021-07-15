function minimum(a, x) {
    let minLeft = 0;
    let minRight = 0;
    let copyA = a;

    while(copyA % x){
        minLeft++;
        copyA--;
    }

    while(a % x) {
        minRight++;
        a++;
    }
    return Math.min(minLeft, minRight);
}