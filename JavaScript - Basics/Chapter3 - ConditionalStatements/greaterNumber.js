function greaterNumber([n1, n2]){
    let num1 = parseInt(n1);
    let num2 = parseInt(n2);

    if(num1 > num2){
        console.log(`${num1} is greater!`);
    }
    else if(num1 < num2){
        console.log(`${num2} is greater!`);
    }
    else{
        console.log("The numbers are equal.");
    }

}


greaterNumber([3,5]);