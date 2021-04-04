// Random number generate;

function random(n) {
    for(let i=0; i<n; i++){
        let generateNumber = Math.random()*10;
        var roundNumber = Math.round(generateNumber);
        console.log(roundNumber);
    }
}
random(9);