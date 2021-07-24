function allNonConsecutive (arr) {
    let resArr = arr.filter((el, index) => index !== 0 && el !== arr[index-1]+1);
    for(let i=0;i<resArr.length;i++) resArr[i] = {i: arr.indexOf(resArr[i]), n: resArr[i]};
    return resArr;
}