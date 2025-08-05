
function sumOfFirst_n_Numbers(n){
    if(n == 0) return 0;
    return (n + sumOfFirst_n_Numbers(n - 1));
}

console.log(sumOfFirst_n_Numbers(5))