function minimumSteps(numbers, value){
    numbers.sort((a,b) => a-b);
    let sum = numbers[0];
    let count = 0;
    for(let i = 1;sum<value;i++){
        sum+=numbers[i];
        count++
    }
    return count;
}