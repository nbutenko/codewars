const reverseAndMirror = (s1,s2) => {
    const invertReverse = str => str.split('').map(el => 'abcdefghijklmnopqrstuvwxyz'.includes(el) ? el.toUpperCase() : el.toLowerCase()).reverse().join('');
    const mirror = str => str+str.split('').reverse().join('');
    return invertReverse(s2) + '@@@' + mirror(invertReverse(s1));
}