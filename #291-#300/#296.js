const isDivisible = (first, ...args) => args.filter(el => !(first % el)).length === args.length