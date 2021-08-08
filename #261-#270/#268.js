const numObj = s => {
    let res = [];
    for(let i = 0; i<s.length;i++){
        let temp = {};
        temp[s[i].toString()] = String.fromCodePoint(s[i]);
        res.push(temp);
    }
    return res;
}

const numObj2 = s => s.map(el => {return {[el]: String.fromCodePoint(el)}});