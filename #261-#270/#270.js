function nameScore(name){
    let res = 0;
    const temp = name.toUpperCase().replace(/\s/g, '');
    for(let i =0;i<temp.length;i++){
        for(let key in alpha) {
            if(key.includes(temp[i])) res += alpha[key];
        }
    }
    return {[name]: res};
}