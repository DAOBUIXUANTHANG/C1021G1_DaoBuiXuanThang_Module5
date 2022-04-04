function fibonacci(n: number) :number{
    if (n <= 2){
        return (n-1);
    }
    return fibonacci(n-2) + fibonacci(n-1);

}


let sum = 0 ;

for (let i = 1 ; i<=20 ; i++){
    console.log("voi i:  " + i + " so fibonacci " + fibonacci(i));
    sum+=fibonacci(i);
}
console.log(sum);
