const totalBill = str => {
    let countR = str.replace(/\s/g,'').split('').length;
    return countR * 2 - Math.floor(countR/5)*2;
}