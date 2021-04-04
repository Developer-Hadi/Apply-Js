function reverse(str) {
    let reverseString = '';
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        reverseString = char + reverseString;
        
    }
    return reverseString;
}

let speech = "Hello Bangladesh. I love you very much."
console.log(reverse(speech));
console.log(reverse('I love you'));