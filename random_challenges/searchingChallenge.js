let a = ['Z:0','A:-1']; // ["A: -1"]
let b = ['B:-1','A:1','B:3','A:5']; // ["A: 6", "B: 2"]
let c = ['X:-1','Y:1','X:-4','B:3','X:5']; // ["B: 3", "Y: 1"]

const searchingChallenge = strArr => {
    const letters = strArr.map(el => el[0]);
    const numbers = strArr.map(el => el.slice(2,el.length));

    let res = [];
    for(let i=0;i<letters.length;i++){
        let sum = numbers.filter((el, index) => letters[index] === letters[i]).reduce((a,b) => +a + +b,0);
        res.push(`${letters[i]}: ${sum}`);
    }

    const unique = res.filter((el, index) => index === res.indexOf(res.find((e, index) => e[0] === el[0]))).reverse();
    return unique.filter(el => el[el.length-1] !== '0');
}