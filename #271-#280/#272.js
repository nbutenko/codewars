const daysRepresented = trips => {
    let res = [];
    for(let i = 0;i<trips.length;i++){
        for(let k = trips[i][0]; k<=trips[i][1];k++){
            if(!res.includes(k)) res.push(k);
        }
    }
    return res.length;
}