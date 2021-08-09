String.prototype.digit = function() {
    return this.length !== 0 && !this.replace(/\d/g,'').split('').length && +this >= 0 && +this <= 9;
};