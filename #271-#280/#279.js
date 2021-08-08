const getStrings = city => {
    city = city.toLowerCase().replace(/\s/g,'').split('');
    const count = city.map(el => city.filter(e => e === el).length);
    city = city.map((el, index) => `${el}:${'*'.repeat(count[index])}`).filter((el,index, arr) => index === arr.indexOf(el));
    return city.join(',');
}