// Feet to Mile convert assignment-01

function feetToMile(feet) {
    let mile = feet/5280;
    let mileResult = feet + " feet = " + mile +" mile";
    return mileResult;
}

var feetResult = feetToMile(528);
console.log(feetResult);

// Wood Calculator assignment-02

function woodCalculator(chair, table, khat) {
    let chairWood = chair * 1;
    let tableWood = table * 3;
    let khatWood = khat * 5;
    let totalWood = chairWood + tableWood + khatWood;
    let output = "You have to need " + totalWood + " Cubic Foot wood for your chair, table and khat." ;
    return output;
}

let woodCalculatorResult = woodCalculator(5,2,2);
console.log(woodCalculatorResult);

// Brick Calculator assignment-3

function brickCalculator(floor) {
    // 1 feet = 1000 brick;
    if (floor <= 10) {
        let first10FloorBrick = floor * 15 * 1000;
        return first10FloorBrick;
    }else if (floor <= 20) {
        let remainFloor = floor -10;
        let second10FloorBrick = remainFloor*12*1000;
        let secondFloorBrick = 10*15000 + second10FloorBrick;
        return secondFloorBrick;
    }else{
        let remainFloor = floor -20;
        let lastFloorBrick = remainFloor*10*1000;
        let totalBricks = 10*15000 + 10*12000 + lastFloorBrick;
        return totalBricks;
    }
}

let brickResult = "You have need bricks = " + brickCalculator(24);
console.log(brickResult);

// Tiny Friend assignment-04

function tinyFriend(friends) {
    let tinyFriend = friends[0];
    for (let i = 0; i < friends.length; i++) {
        let element = friends[i];
        if(element.length<tinyFriend.length){
            tinyFriend = element;
        }
    }
    return tinyFriend;
}

let friendsArray = ['Abul', 'Kabul','Bablu', 'Mohiuddin', 'Alu'];
let tinyFriendName = tinyFriend(friendsArray);
console.log('Tiny Friend Name = ',tinyFriendName);