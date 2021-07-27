function array(arr){
    let res = arr.split(',').slice(1,-1).join(' ');
    return res.length ? res : null;
}