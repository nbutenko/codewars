const remove = s => {
    for(let i = s.length-1;i>=0;i--){
        if(s[i] === '!') s = s.slice(0, -1)
        else break;
    }
    return s
}

const remove2 = s => s.replace(/!+$/, '');