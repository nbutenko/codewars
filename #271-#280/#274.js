function solve(st) {
    const dif = st.split('').map(el => st.lastIndexOf(el) - st.indexOf(el));
    const maxDif = Math.max(...dif);
    const countRes = dif.filter(el => el === maxDif).length;
    return countRes === 1 ? st[maxDif] : st.split('').filter((el, index) => dif[index] === maxDif).sort()[0];
}