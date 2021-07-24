function danspower(num, power) {
    return Math.pow(num, power) % 2 ? Math.round(Math.pow(num,power)/10)*10 : Math.pow(num, power);
}