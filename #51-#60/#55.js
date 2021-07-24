var number = function(busStops){
    let sumIn = 0;
    let sumOut = 0;
    for(let i=0;i<busStops.length;i++){
        sumIn+=busStops[i][0];
        sumOut+=busStops[i][1];
    }
    return sumIn-sumOut;
}