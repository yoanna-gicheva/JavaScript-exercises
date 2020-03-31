function solve([n]){
    for(i = 1; i <= n; i++)
    {
        if(i == 1 || i == n)
        {
            console.log("*".repeat(n));
        }
        else 
        {
            console.log("*"+ " ".repeat(n-2)+"*");
        }

    }
}
solve([4]);