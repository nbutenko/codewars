function superBrain(sequence,operations){

    // ADD x y n
    const ADD = (arr, oper) => {
        const start = +oper[1];
        const end = +oper[2];
        const incr = +oper[3];
        return arr.map((el, index) => index >= start-1 && index < end ? el+incr : el);
    }

    // REVERSE x y
    const REVERSE = (arr, oper) => {
        const a = +oper[1];
        const b = +oper[2];
        return arr.map((el, index) => index === a-1 ? arr[b-1] : index === b-1 ? arr[a-1] : el);
    }

    // REVOLVE x y n
    const REVOLVE = (arr, oper) => {
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
    const INSERT = (arr, oper) => {
        const before = +oper[1];
        const insert = +oper[2];
        return arr.slice(0, before-1).concat(insert, arr.slice(before-1));
    }

    // DELETE x
    const DELETE = (arr, oper) => {
        const n = +oper[1];
        return arr.filter((el, index) => index !== n-1);
    }

    // MIN x y
    const MIN = (arr, oper) => {
        const start = +oper[1];
        const end = +oper[2];
        let sub = arr.filter((el, index) => index >= start-1 && index < end);
        return Math.min(...sub);
    }

    for(let i = 0;i<operations.length;i++){
        let temp = operations[i].split(' ');
        switch(temp[0]){
            case 'ADD':
                sequence = ADD(sequence, temp);
                break;
            case 'REVERSE':
                sequence = REVERSE(sequence, temp);
                break;
            case 'REVOLVE':
                sequence = REVOLVE(sequence, temp);
                break;
            case 'INSERT':
                sequence = INSERT(sequence, temp);
                break;
            case 'DELETE':
                sequence = DELETE(sequence, temp);
                break
            case 'MIN':
                sequence = MIN(sequence, temp);
                break;
        }
    }
    return sequence;
}