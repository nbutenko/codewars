const well = x => {
    let goodIdeas = x.filter(el => el==='good').length
    return goodIdeas > 2 ? 'I smell a series!' : goodIdeas >= 1 ? 'Publish!' : 'Fail!';
}