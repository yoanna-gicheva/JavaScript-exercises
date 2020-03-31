function isEven(args1){
    let num = parseInt(args1);

    if(num % 2 == 0){
        console.log("even");
    }
    else{
        console.log("odd");
    }
}

isEven([2]);