const hydrate = s => {
    let countDrinks = s.replace(/\D/g, '').split('').reduce((a,b) => + a+ +b);
    return `${countDrinks} ${countDrinks > 1 ? 'glasses' : 'glass'} of water`;
}