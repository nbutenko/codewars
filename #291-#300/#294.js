const findSum = (...args) => !args.length ? 0 : args.filter(el => el >= 0).length === args.length ? args.reduce((a,b) => a+b) : -1