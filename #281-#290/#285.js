String.prototype.toAlternatingCase = function () {
    const upper = this.toUpperCase();
    return this.toString().split('').map((el, index, arr) => upper[index] == el ? el.toLowerCase() : el.toUpperCase()).join('');
}