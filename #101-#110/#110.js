const twoOldestAges = ages => {
    ages.sort((a,b) => b-a);
    return [ages[1], ages[0]]
}