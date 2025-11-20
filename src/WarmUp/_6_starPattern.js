// star pattern for n = 4
/* 1.
  ****
  ****
  ****
  ****
*/
let n = 5;
let row = "";  
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    row += '* ';
  }
  row += '\n';
}
console.log(row);

/*  2A. Left Triangle 
  *
  * *
  * * *
  * * * *
*/
row = "";
for(let i = 0; i < n; i++){
  for(let j = 0; j < i+1; j++){
    row += "* "
  }
  row += '\n';
}
console.log(row);
/*  2B. Downward Left Triangle
  * * * *
  * * *
  * *
  * 
*/
row = "";
for(let i = 0; i < n; i++){
  for(let  j = 0; j < n - i; j++){
    row += "* ";
  }
  row += '\n'
}
console.log(row)
/*  2C. Hollow Left Triangle
  *
  * *
  *   *
  *     * 
  * * * * *   
*/
row = "";    
for (let i = 1; i <= n; i++) {   
  for (let j = 1; j <= i; j++) {      
    if (j==1 || j==i || i==n) {   
      row += "* ";
    }
    else{
      row += "  ";
    }
  }
  row += "\n";   
}
console.log(row);   

/*  2D. Hollow Downward Left Triangle
  * * * * *
  *     *
  *   * 
  * *
  * 
*/
row = "";
for(let i = 1; i <= n; i++){
  for(let j = 0; j <= (n-i); j++){
    if(j==0 || j==(n-i) || i==1){
      row += "* ";
    }
    else{
      row += "  ";
    }
  }
  row += '\n';
}
console.log(row)

/*  3A. Right Triangle
        *
      * *
    * * *
  * * * *
*/
row = "";
for(let i = 0; i < n; i++){
  for(let j = 0; j < (n - (i+1)); j++){
    row += "  "
  }
  for(let k = 0; k < (i+1); k++){
    row += "* "
  }
  row += '\n'
}
console.log(row)
/*  3B. Right Downward Triangle
  * * * *  
    * * *
      * * 
        *
*/
row = "";
for(let i = 0; i < n; i++){
  for(let j = 1; j <= i; j++){
    row += "  "
  }
  for(let k = 0; k < (n-i); k++){
    row += "* "
  }
  row += '\n'
}
console.log(row)

/*  3C. Hollow Right Trianlge
            *
          * *
        *   *
      *     *
    * * * * * 
*/
row = "";
for (let i = 1; i <= n; i++) {    
  for (let j = 1; j <= (n-i); j++) {    
    row += "  ";
  }
  for (let k = 1; k <= i; k++) {      
      if (k==1 || k==i || i==n) {  
        row += "* ";    
      }
      else{
        row += "  ";    
      }
  }
  row += "\n";    
}
console.log(row);  
/*  3D. Hollow Downward Right Trianlge
    *  *  *  *  *
       *        *
          *     *
             *  *
                *    
*/
row = "";
for (let i = n; i >= 0; i--) {   
  for (let j = 1; j <= (n-i); j++) {    
    row += "  "
  }
  for (let k = 1; k <= i; k++) {  
    if (k==1 || k==i || i==n) {  
      row += "* ";    
    }
    else{
      row += "  ";    
    }    
 } 
  row += "\n";    
}
console.log(row);  

/*  4. Pyramid
      *
    * * *
  * * * * *
* * * * * * *
*/
row = ""
for(let i = 1; i<=n; i++){
  for(let j = 0; j <= (n-1-i); j++){
    row += "  "
  }
  for(let k = 1; k <= ((i*2)-1); k++){
    row += "* "
  }
  row += '\n'
}
console.log(row)
/*  4B. Downward pyramid
    * * * * * * * * *
      * * * * * * *
        * * * * *
          * * *
            *
*/
row = ""
for(let i = n; i>=1; i--){
  for(let j = 0; j <= (n-1-i); j++){
    row += "  "
  }
  for(let k = 1; k <= ((i*2)-1); k++){
    row += "* "
  }
  row += '\n'
}
console.log(row)




/*  3.
  1
  1 2
  1 2 3
  1 2 3 4
*/
row = "";
for(let i = 0; i<n; i++){
  for(let j=0; j<=i; j++){
    row += ((j+1) + " ") 
  }
  row += '\n'
}
console.log(row)

/*  4.
  1
  2 2
  3 3 3
  4 4 4 4
*/
row ="";
for(let i = 0; i < n; i++){
  for(let j = 0; j <=i; j++){
    row += ((i + 1) + " ")
  }
  row += '\n';
}
console.log(row)

/*  5.
  1 2 3 4
  1 2 3
  1 2
  1
*/
row = ""
for(let i = n; i >= 0; i--){
  for(let j = 0; j <= i; j++){
    row += ((j+1) + " ")
  }
  row += '\n'
}
console.log(row)

/*  7.
  1
  1 0
  1 0 1
  1 0 1 0
*/
let flip = 1;
row = "";
for(let i = 0; i<n; i++){
  for(let j = 0; j<=i; j++){
    row += flip + " ";
    if(flip == 1) flip = 0;
    else flip = 1
  }
  row += "\n"
}
console.log(row)

 
  



