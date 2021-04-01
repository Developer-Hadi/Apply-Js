function fibnacci(n) {
    var fibo = [0,1];
    for(let i=2; i<=n; i++){
        fibo[i] = fibo[i-1] + fibo[i-2];
    }
    return fibo;
}

const result = fibnacci(1);
console.log(result);