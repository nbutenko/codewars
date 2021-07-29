function getDrinkByProfession(param){
    let input = ['Jabroni','School Counselor','Programmer','Bike Gang Member','Politician','Rapper'];
    let output = ['Patron Tequila','Anything with Alcohol','Hipster Craft Beer','Moonshine','Your tax dollars','Cristal']
    let res = output[input.map(el => el.toLowerCase()).indexOf(param.toLowerCase())];
    return res ? res : 'Beer';
}