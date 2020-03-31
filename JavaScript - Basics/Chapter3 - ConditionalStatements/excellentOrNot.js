function isExcellent([n]){
    let grade = parseFloat(n);

    if(grade >= 5.50){
        console.log("Excellent!");
    }
    else{
        console.log("Not excellent.");
    }
}

isExcellent([5.50]);