function sortRainbow(colour){
    const rainbow = ['red','orange','yellow','green','blue','indigo','violet'];
    return colour.length ? colour.every((el, index) => el === rainbow[index]) : false;
}