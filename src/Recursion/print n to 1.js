function fun(num){
    if(num === 0) return;
    console.log(num);
    num = num - 1;
    fun(num)
} 
let a = 5;
fun(a);

function print(n){
    if(n == 0) return;
    console.log(n);
    print(--n);
}
print(a)