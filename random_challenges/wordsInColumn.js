function wordsInColumn(text){
    let arr = text.split(' ');
    let maxLength = Math.max(...arr.map(el => el.length));
    arr = arr.map(el => ' '.repeat(maxLength - el.length) + el);
    return arr.join('\n');
}