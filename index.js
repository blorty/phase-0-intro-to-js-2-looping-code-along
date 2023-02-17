// Code your solutions in this file
let names = ["Guadalupe", "Ollie", "Aki"];

function writeCards(names, event) {
    let messages = [];
    debugger;
    let i = 0;
    while (i < names.length) {  
        messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);       
        i++;
        debugger;
    }
    return messages;
}
writeCards(names);

function countDown() {
for (let coundown = 0; coundown < 11; coundown++) {
    console.log(coundown);
    }
}

countDown(10);