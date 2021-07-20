function solve(a, b) {
    let scoreA = 0;
    let scoreB = 0;

    for(i=0;i<a.length;i++){
        if(a[i] > b[i]) scoreA += 1;
        else if(a[i] < b[i]) scoreB += 1;
    }
    return scoreA > scoreB ? `${scoreA}, ${scoreB}: Alice made "Kurt" proud!` :
           scoreA < scoreB ? `${scoreA}, ${scoreB}: Bob made "Jeff" proud!` :
                             `${scoreA}, ${scoreB}: that looks like a "draw"! Rock on!`;
}