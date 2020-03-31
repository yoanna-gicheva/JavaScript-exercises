function bonusScore([number]){
    let num = parseInt(number);
    let bonus = 0;

    if(num >= 100){
        bonus += 5;
    }
    else if(num > 100 && num <= 1000){
        bonus = num * 20/100;
    }
    else if(num > 1000){
        bonus = num * 10/100;
    }

    if(num % 2 == 0){
        bonus ++;
    }
    if(num % 10 == 5){
        bonus += 2;
    }

    let result = num + bonus;
    console.log(result);
}