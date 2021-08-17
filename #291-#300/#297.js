function objectType(obj) {
    return Object.prototype.toString.call(!arguments.length ? null : obj);
}