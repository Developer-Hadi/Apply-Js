/*
    Hoisting
    var vs let (and const)
    function

*/

// Hoisting
country = 'Bangladesh';
console.log(country);

console.log(country);
var country;

// Functional hoisting

let language = 'Javascript';
let LANGUAGE = 'JAVA';

function myFun() {
    if (!language) {
        let language = LANGUAGE;
    }
    return language;
}

console.log(myFun());