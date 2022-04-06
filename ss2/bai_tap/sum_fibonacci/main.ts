function fibonacci(n: number) :number{
    if (n <= 2){
        return (n-1);
    }
    return fibonacci(n-2) + fibonacci(n-1);

}



function sumFibonacci(n: number ):number{
    var sum = 0 ;
    for (let i = 1 ; i<=n ; i++){
        console.log("voi i:  " + i + " so fibonacci " + fibonacci(i));
        sum+=fibonacci(i);
    }
    console.log(sum);
    return sum;
}

sumFibonacci(5);
