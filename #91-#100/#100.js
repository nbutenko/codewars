const duplicates = arr => {
    let preFilter = arr.filter((el, index) => index !== arr.indexOf(el));
    return preFilter.filter((el, index) => index === preFilter.indexOf(el) );
}