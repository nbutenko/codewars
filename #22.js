function race(v1, v2, g) {
    if(v1 >= v2) return null;
    let seconds = Math.trunc(g/(v2-v1) * 3600);
    const hours = Math.trunc(seconds/3600);
    const minutes = Math.trunc((seconds - hours*3600) / 60);
    seconds = seconds - hours*3600  - minutes*60;
    return [hours,minutes, seconds];
}