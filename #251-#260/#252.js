function bloodAlcoholContent(drinks, weight, sex, time){
    let A = drinks.ounces * drinks.abv;
    let W = weight
    let r = sex === 'male' ? 0.73 : 0.66;
    let H = time;

    return +((A * 5.14 / W * r) - 0.015 * H).toFixed(4);
}