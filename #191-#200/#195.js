const wordsToMarks = string => {
    let sum = 0;
    for(let i = 0;i<string.length;i++) sum += 'abcdefghijklmnopqrstuvwxyz'.indexOf(string[i])+1;
    return sum;
}