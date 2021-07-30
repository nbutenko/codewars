var scoreToTally = (score) => {
    console.log(score)
    let tally = ['a', 'b', 'c', 'd', 'e'];
    let res = [];
    for(let i = 5;i>0;i--){
        while(score>=i){
            res.push(tally[i-1]);
            score-=i;
        }
    }
    return res.map(el => el === 'e' ? 'e <br>' : el).join('');
}