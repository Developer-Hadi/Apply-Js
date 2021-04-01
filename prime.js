function isPrime(n) {
    for(let i=2; i<n; i++){
        if (n%i == 0) {
            let notPrime = n + ' is not a prime number.';
            return notPrime;
        }
    }
    let prime = n + ' is a prime number.';
    return prime;
}
let result = isPrime(0);
console.log(result);