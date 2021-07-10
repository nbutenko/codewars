function solve(n) {
    if (n % 10) return -1;
    const notes = [500, 200, 100, 50, 20, 10];

    let result = 0;
    for (let i = n; i > 0;) {
        result++;
        for (let k = 0; k < notes.length; k++) {
            if (i >= notes[k]) {
                i -= notes[k];
                break;
            }
        }
    }
    return result;
}