var mispelled = (word1, word2) =>{
    if(word2.length > word1.length+1 || word1.length > word2.length+1) return false;
    if(word1.length === word2.length) return word2.split('').filter((el, index) => el !== word1[index]).length === 1;
    return word2.includes(word1) || word1.includes(word2);
}