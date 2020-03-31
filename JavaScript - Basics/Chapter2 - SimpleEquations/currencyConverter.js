function currencyConverter([amount, fromArgs, toArgs]){
    let result = 0.0;
    if(fromArgs == "BGN")
    {
        if(toArgs == "USD"){
            result = amount/1.79549;
        }
        else if(toArgs == "EUR"){
            result = amount/1.95583;
        }
        else if (toArgs == "GBP"){
            result = amount/2.53405;
        }
    }
    else if(fromArgs == "USD")
    {
        if(toArgs == "BGN"){
            result = amount*1.79549;
        }
        else if(toArgs == "EUR"){
            result = amount*1.79549;
            result /=1.95583;
        }
       else if(toArgs == "GBP"){
            result = amount*1.79549;
            result /= 2.53405;
        }
    }
    else if(fromArgs == "EUR")
    {
        if(toArgs == "GBP"){
            result = amount*1.95583;
            result /= 2.53405;
        }
        else if(toArgs == "USD"){
            result = amount*1.95583;
            result /= 1.79549;
        }
        else if(toArgs == "BGN"){
            result = amount*1.95583;
        }
    }
    else if(fromArgs == "GBP")
    {
        if(toArgs == "USD"){
            result = amount*2.53405;
            result /= 1.79549;
        }
       else if(toArgs == "BGN"){
           result = amount*2.53405;
       }
       else if(toArgs == "EUR"){
        result = amount*2.53405;
        result /= 1.95583;
       }
    }

    console.log(result.toFixed(2));
}

currencyConverter([20, "USD", "BGN"]);
currencyConverter([100, "BGN", "EUR"]);
