function interweave(s1, s2) {
    let res = '';
    for(let i = 0; i < s2.length; i++){
        res = res + s1[i] + s2[i];
    }
    let last = s1.length > s2.length ? s1[s1.length-1] : '';
    return (res + last).replace(/\d/g, '');
}