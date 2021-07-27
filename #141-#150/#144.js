function predictAge(age1,age2,age3,age4,age5,age6,age7,age8) {
    let arr = [...arguments];
    return Math.floor(Math.sqrt(arr.reduce((acc, curr) => acc+curr**2,0)) / 2);
}
