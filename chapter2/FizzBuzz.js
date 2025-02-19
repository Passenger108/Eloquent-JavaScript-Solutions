
//mine approach
for(let number =1; number <101; number++){
    let message="";
    if(number%3==0)
        message+="Fizz";
    if(number%5==0)
        message+="Buzz";
    console.log(message||number);
}

// book approach

for (let n = 1; n <= 100; n++) {
    let output = "";
    if (n % 3 == 0) output += "Fizz";
    if (n % 5 == 0) output += "Buzz";
    console.log(output || n);
  }