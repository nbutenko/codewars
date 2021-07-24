var FilterString = function(value) {
    let result = '';
    for(let i = 0; i<value.length; i++) {
        if(!isNaN(value[i])) result+=value[i];
    }
    return +result;
}