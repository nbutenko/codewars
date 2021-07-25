const findChildren = (santasList, children) => {
    let goodKids = children.filter(el => santasList.includes(el));
    return goodKids.filter((el, index) => index === goodKids.lastIndexOf(el)).sort();
}