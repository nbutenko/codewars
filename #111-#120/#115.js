const longest = (s1, s2) => {
    let arr = Array(...s1+s2);
    return arr.filter((el, index) => index === arr.lastIndexOf(el)).sort().join('');
}