function rowWeights(array){
    const teamOne = array.filter((el, index) => !(index%2));
    const teamTwo = array.filter((el, index) => index%2);


    let sumWeightTeamOne = 0;
    let sumWeightTeamTwo = 0;

    for(let i=0;i<teamOne.length;i++){
        sumWeightTeamOne+=teamOne[i];
    }
    for(let k=0;k<teamTwo.length;k++){
        sumWeightTeamTwo+=teamTwo[k];
    }
    return [sumWeightTeamOne, sumWeightTeamTwo];
}