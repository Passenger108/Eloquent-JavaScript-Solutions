// mine approach

let sz =8;
let chessboard="";
for(let i=1; i<=sz; i++){
    for(let j=1; j<=sz; j++){
        if(i%2!=0)
            chessboard+=(j%2==0)? "#": " ";
        else
            chessboard+=(j%2!=0)?"#":" ";
    }
    chessboard+="\n";
}

console.log(chessboard);

//book appraoch

let size = 8;

let board = "";

for (let y = 0; y < size; y++) {
  for (let x = 0; x < size; x++) {
    if ((x + y) % 2 == 0) {
      board += " ";
    } else {
      board += "#";
    }
  }
  board += "\n";
}

console.log(board);

//verificaton of mine approach

console.log(board==chessboard);