let a = 5055;
let b =666;
let c = 933;

if (a>b && a>c) {
    console.log(a, ' is the biggest number');
}else if (b>a && b>c) {
    console.log(b, ' is the biggest number');
}else{
    console.log(c, ' is the biggest number');
}

let max = Math.max(a,b,c);
console.log(max, ' is the biggest number');