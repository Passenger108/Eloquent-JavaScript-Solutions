// mine approach
for(let count =1; count<8; count++){
    console.log("#".repeat(count));
}

// book solution
for(let line = "#"; line.length<8; line+="#"){
    console.log(line);
}