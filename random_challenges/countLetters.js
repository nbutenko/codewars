function countLetters(str){
    const arr = str.toLowerCase().replace(/\W/g, '').split('');
    const count = arr.map(el => arr.filter(e => e === el).length);
    const uniqueArr = arr.filter((el, index, curr) => index === curr.indexOf(el));
    let res = {}
    for(let i = 0; i<uniqueArr.length;i++){
        res[uniqueArr[i]] = count[arr.indexOf(uniqueArr[i])];
    }
    return res;
}

function countLetters2(str){
    str = str.replace(/\s/g,'').toLowerCase();
    let obj = {};
    for(let i = 0; i < str.length; i++){
        if(!obj[str[i]]) obj[str[i]] = 1;
        else obj[str[i]] += 1;
    }
    return obj;
}