function replaceCommon(string, letter) {
    const arr = string.replace(/\s/g, '').split('');
    const count = arr.map(el => arr.filter(e => e === el).length);
    const max = Math.max(...count);
    const char = arr[count.indexOf(max)];
    return string.split('').map(el => el === char ? letter : el).join('')
}