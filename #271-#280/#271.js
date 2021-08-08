function outed(meet, boss){
    let sum = 0;
    for(let key in meet) {
        sum += key !== boss ? meet[key] : meet[key]*2;
    }
    return sum/Object.keys(meet).length <= 5 ? 'Get Out Now!' : 'Nice Work Champ!';
}