String.prototype.camelCase=function(){
    return this.length ? this.trim().split(' ').map(el => el[0].toUpperCase().concat(el.slice(1))).join('') : '';
}