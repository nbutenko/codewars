function countLanguages(list) {
    let res = {};
    for(let i = 0;i<list.length;i++){
        if(!res[list[i].language]) res[list[i].language] = 1;
        else res[list[i].language] += 1;
    }
    return res;
}