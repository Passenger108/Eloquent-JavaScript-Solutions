
function countBs (string){
    return countChar(string,"B");
}

console.log(countBs("adfaweBaefgBsdgaoiBaBBBefg"));


function countChar(string,key){
    let count=0;
    for(let char of string){
        if(char === key)
            count++;
    }
    return count;
}

console.log(countChar("awgawgashdoasgwa","a"));

