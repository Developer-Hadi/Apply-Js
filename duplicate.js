let name = ['abul', 'babul', 'kabul', 'abul', 'robi', 'kabul', 'sani'];
let uniqueName = [];

for (let i = 0; i < name.length; i++) {
    let element = name[i];
    let index = uniqueName.indexOf(element);
    if (index == -1) {
        uniqueName.push(element);
    }
    
}

console.log(uniqueName);