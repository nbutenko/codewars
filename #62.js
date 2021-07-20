function getDay(day, isLeap){
    let resultMonth = '';
    const months = [
        ["January", 31],
        ["February", (isLeap) ? 29 : 28],
        ["March", 31],
        ["April", 30],
        ["May", 31],
        ["June", 30],
        ["July", 31],
        ["August", 31],
        ["September", 30],
        ["October", 31],
        ["November", 30],
        ["December", 31],
    ];
    for(i=0;i<months.length;i++){
        if(day<=months[i][1]) {
            resultMonth = months[i][0];
            break;
        }
        day-=months[i][1];
    }
    return resultMonth ? `${resultMonth}, ${day}` : 'wrong day';
}