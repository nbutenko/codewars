const letterCheck = arr => !(!!arr[1].split('').filter(el => !arr[0].toLowerCase().includes(el.toLowerCase())).length);