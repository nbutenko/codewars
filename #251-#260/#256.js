function iTri(s){
    const swim = 2.4;
    const bike = 112;
    const run = 26.2;
    const total = swim+bike+run;
    const res =
        !s ? "Starting Line... Good Luck!"
            : s >= total ? "You're done! Stop running!"
            : s < swim ? {'Swim':`${(total-s).toFixed(2)} to go!`}
                : s < bike+swim ? {'Bike': `${(total-s).toFixed(2)} to go!`}
                    : total - s <= run && total - s > 10 ? {'Run': `${(total-s).toFixed(2)} to go!`}
                        : {'Run':'Nearly there!'};
    return res;
}