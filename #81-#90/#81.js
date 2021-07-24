function doubles(s) {
    let res = '';
    for (let i = 0; i < s.length; i++) {
        if (s[i] === s[i + 1]) i++;
        else {
            if (res[res.length - 1] === s[i]) res = res.slice(0, -1);
            else res += s[i];
        }
    }
    return res;
}