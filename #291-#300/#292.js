function add() {
    let arr = Array.from(arguments);
    return arr.length ? arr.map((el, index) => el*(index+1)).reduce((a,b) => a+b) : 0
}