function sumSeconds([arg1, arg2, arg3]){
    let first = parseInt(arg1);
    let second = parseInt(arg2);
    let third = parseInt(arg3);

    let seconds = first + second + third;
    let minutes = 0;

    for(let i = 1; i <= 2; i++){
        if(seconds > 59){
            minutes++;
            seconds-=60;
        }
    }

    if(seconds < 10){
        console.log(minutes + ":0" + seconds);
    }else{
        console.log(minutes + ":" + seconds);
    }

}


sumSeconds([35, 45, 44]);