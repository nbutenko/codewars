Array.prototype.only = function(keys){
    return this.filter((el, index) => keys.includes(index))
}