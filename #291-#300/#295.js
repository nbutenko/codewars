const last = (...args) => args.length > 1 ? args[args.length-1] : args[0].toString().length > 1 ? args[0][args[0].length-1] : args[0]
