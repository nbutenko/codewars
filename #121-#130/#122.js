function mirror(data) {
    let a = data.concat().sort((a,b) => a-b);
    a.pop();
    return a.concat(data.concat().sort((a,b) => b-a));
}