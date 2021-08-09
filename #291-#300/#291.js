var Calculator = {
    average: function(...args) {
        return args.length ? args.reduce((a,b) => a+b) / args.length : 0
    }
};