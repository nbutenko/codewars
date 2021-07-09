function makeChocolates(small, big, goal) {
    const smallChocolateWeight = 2;
    const bigChocolateWeight = 5;

    for(let i = 0; i <= small; i++) {
        for(let k = big; k>=0; k--){
            if(i*smallChocolateWeight + k*bigChocolateWeight === goal) {
                return i;
            }
        }
    }
    return -1;
}