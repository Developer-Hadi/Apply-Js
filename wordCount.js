let speech = 'Bangladesh is our  country. We   love our country.';
let count =0;

for (let i = 0; i < speech.length; i++) {
    let char = speech[i];
    if (char == ' ' && speech[i-1] != ' ') {
        count++;
    }
}
count++;

console.log(count);