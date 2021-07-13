function multiply(number){
    let initialNumber = number;
    do{
        number /= 10;
        initialNumber *= 5;
    } while(Math.floor(Math.abs(number)) > 0)
    return initialNumber;
}