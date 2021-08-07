function superBrain(sequence,operations){

    // ADD x y n
    const add = (arr, oper) => {
        const start = +oper[1];
        const end = +oper[2];
        const incr = +oper[3];
        return arr.map((el, index) => index >= start-1 && index < end ? el+incr : el);
    }

    // REVERSE x y
    const reverse = (arr, oper) => {
        const start = +oper[1];
        const end = +oper[2];
        let subReverse = arr.filter((el, index) => index >= start-1 && index < end).reverse();
        return arr.slice(0, start-1).concat(subReverse, arr.slice(end));
    }

    // REVOLVE x y n
    const revolve = (arr, oper) => {
        const start = +oper[1];
        const end = +oper[2];
        const step = +oper[3];
        let sub = arr.filter((el, index) => index >= start-1 && index < end);
        for(let i = 0;i<step;i++) {
            sub = sub.slice(1).concat([sub[0]]);
        }
        return arr.slice(0, start-1).concat(sub, arr.slice(end));
    }

    // INSERT x n
    const insert = (arr, oper) => {
        const before = +oper[1];
        const insert = +oper[2];
        return arr.slice(0, before-1).concat(insert, arr.slice(before-1));
    }

    // DELETE x
    const del = (arr, oper) => {
        const n = +oper[1];
        return arr.filter((el, index) => index !== n-1);
    }

    // MIN x y
    const min = (arr, oper) => {
        const start = +oper[1];
        const end = +oper[2];
        let sub = arr.filter((el, index) => index >= start-1 && index < end);
        return Math.min(...sub);
    }

    for(let i = 0;i<operations.length;i++){
        let temp = operations[i].split(' ');
        switch(temp[0]){
            case 'ADD': sequence = add(sequence, temp); break;
            case 'REVERSE': sequence = reverse(sequence, temp); break;
            case 'REVOLVE': sequence = revolve(sequence, temp); break;
            case 'INSERT': sequence = insert(sequence, temp); break;
            case 'DELETE': sequence = del(sequence, temp); break
            default: sequence = min(sequence, temp);        }
    }
    return sequence;
}