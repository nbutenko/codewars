Array.prototype.reverse = function() {
    let temp = this.splice(0);
    while(temp.length) this.push(temp.pop());
    return this;
};