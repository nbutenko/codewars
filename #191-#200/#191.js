function sabb(s, val, happiness){
    let word = 'sabbatical';
    let count = 0;
    for(let i=0;i<s.length;i++){
        if(word.includes(s[i].toLowerCase())) count++;
    }
    return count+val+happiness > 22 ? 'Sabbatical! Boom!' : 'Back to your desk, boy.'
}