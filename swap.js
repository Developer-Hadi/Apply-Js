// System 1
let a = 4;
let b = 9;
console.log("Before swap: a= ",a, "b= ",b);
let temp;
temp = a;
a=b;
b=temp;

console.log("After swap: a= ",a, "b= ",b);

// System 2;
let x = 5;
let y = 9;

x = x +y;
console.log(x);
y = x - y;
console.log(y);
x = x - y;
console.log(x);


// System 3

x=4; y=3;
[x,y] = [y,x];
console.log(x,y);