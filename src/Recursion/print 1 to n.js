let n = 5
function print(x){
    if(x > n) return;
    console.log(x);
    print(++x)
}

print(1)