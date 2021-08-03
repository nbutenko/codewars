function changeDigitsOrder(num){
    let numArr = num.toString().split('').filter(el => el !== '0').map(el => +el);
    let res = '';
    while(numArr.length){
        let minIndex = numArr.indexOf(Math.min(...numArr));
        res += numArr[minIndex];
        numArr = numArr.filter((el, index) => index !== minIndex);
    }
    if(res.length < 4) {
        switch (res.length){
            case 1: return +(res+'000');
            case 2: return +(res[0]+'00'+res[1]);
            case 3: return +(res[0]+'0'+res.slice(1));
        }
    }
    return +res;
}

function changeDigitsOrder2(num) {
    let arr = num.toString().split('').sort();
    for(let i = 0; i < arr.length; i++) {
        if (arr[i] !== '0') {
            let temp = arr[i];
            arr[i] = '0';
            arr[0] = temp;
            break;
        }
    }
    return arr.join('')*1;
}