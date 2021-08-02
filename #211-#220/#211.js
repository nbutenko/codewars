const correct = string => string.replace(/[015]/g, function(s) {
    switch (s) {
        case '0': return 'O';
        case '1': return 'I';
        case '5': return 'S';
        default: return '';
    }
})