function scrollingText(text){
    let res = [text.toUpperCase()];
    for(let i = 0;i<text.length-1;i++){
        text = (text.slice(1)+text[0]).toUpperCase();
        res.push(text);
    }
    return res;
}