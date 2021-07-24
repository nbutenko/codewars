function crap(x, bags, cap){
    const emptySpace = bags*cap;
    let crap = 0;
    let dog = 0;

    for(let i=0;i<x.length;i++) {
        crap += x[i].filter(el => el === '@').length;
        dog += x[i].filter(el => el === 'D').length;
        if(dog) return "Dog!!";
    }
    return emptySpace >= crap ? "Clean" : "Cr@p";
}