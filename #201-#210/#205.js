const tailSwap = arr => {
    let newArr = [];
    arr.map(el => newArr.push(el.split(':')[0],el.split(':')[1]));
    return [`${newArr[0]}:${newArr[3]}`, `${newArr[2]}:${newArr[1]}`];
}