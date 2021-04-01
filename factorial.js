// Factorial using for loop

function factorial(number) {
    let factorial =1;
    for (let i = 1; i <= number; i++) {
        factorial = factorial*i;
    }
    return factorial;
}

const result = factorial(6);
console.log(result);

// Factorial using while loop

function factorial(number) {
    if (number==0) {
        return 1;
    }else{
        let fact =1;
    let i=1;
    while(i<=number){
        fact = fact*i;
        i++;
    }
    return fact;
    }
}

const result2 = factorial(-121);
console.log(result2);