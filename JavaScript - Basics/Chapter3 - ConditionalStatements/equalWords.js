function equalWords([args1, args2]){
    let word1 = args1.toLowerCase();
    let word2 = args2.toLowerCase();

    if(word1 == word2){
        console.log("yes");
    }else{
        console.log("no");
    }

}

equalWords(["hello", "HELLO"]);