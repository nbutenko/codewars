const arrCheck = value => {
    for(let i=0;i<value.length;i++){
        if(!Array.isArray(value[i])) return false;
    }
    return true;
}