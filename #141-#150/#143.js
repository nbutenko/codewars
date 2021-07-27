const findDeletedNumber = (arr, mixArr) => {
    mixArr.sort((a,b) => a-b);
    let res = arr.filter(el => !mixArr.includes(el));
    return res.length ? res[0] : 0;
}