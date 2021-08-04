function duplicateSandwich(a) {
    let arr = typeof a === 'string' ? a.split('') : a;
    let dupe =  arr.filter((el, index) => index !== arr.lastIndexOf(el))[0];
    let cut = arr.slice(arr.indexOf(dupe)+1, arr.lastIndexOf(dupe));
    return typeof a === 'string' ? cut.join('') : cut;
}