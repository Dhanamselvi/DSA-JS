// star pattern for n = 4
let n = 4;
for (let i = 0; i < n; i++) {
  let row = '';
  for (let j = 0; j < n; j++) {
    row += '*';
  }
  console.log(row);
}
/*
  ****
  ****
  ****
  ****
*/

// 

for(let i = 0; i < n; i++){
  let row = "";
  for(let j = 0; j < i+1; j++){
    row += "*"
  }
  console.log(row)
}

for(let i = 0; i<n; i++){
  let row = " ";
  for(let j=0; j<=i; j++){
    row += ((j+1) + " ") 
  }
  console.log(row)
}

/* For Above both loop the same ouptput
  *
  **
  ***
  ***
*/

for(let i = 0; i < n; i++){
  let row = "";
  for(let j = 0; j <=i; j++){
    row += ((i + 1) + " ")
  }
  console.log(row)
}
/*
  1
  2 2
  3 3 3
  4 4 4 4
*/

for(let i = n; i >= 0; i--){
  let row = "";
  for(let j = 0; j <= i; j++){
    row += j+1
  }
  console.log(row)
}

/*
  1 2 3 4
  1 2 3
  1 2
  1
*/

for(let i = 0; i < n; i++){
  let row = "";
  for(let j = 0; j < (n - (i+1)); j++){
    row += " "
  }
  for(let k = 0; k < (i+1); k++){
    row += "*"
  }
  console.log(row)
}

/*
        *
      * *
    * * *
  * * * *
*/

let flip = 1;
for(let i = 0; i<n; i++){
  let row = "";
  for(let j = 0; j<=i; j++){
    row += flip;
    if(flip == 1) flip = 0;
    else flip = 1
  }
  console.log(row)
}
/*
  1
  1 0
  1 0 1
  1 0 1 0
*/
