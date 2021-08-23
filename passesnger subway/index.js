//  // document.getElementById("count-el").innerText = 5 

// let firstBatch = 5;
// let secondBatch = 7;

// let count = 5; 

// //  // prints
//  console.log(count);

// initialize the count as 0
// listen of the clicks on the increment button
// increment the count variable when the button is clicked 
// change the count-el in the HTML to reflect the new count

// grab the count-el element, and store it in a countEl variable
let countEl = document.getElementById("count-el");
// grab the save-el paragraph and store it in a variable called saveEl
let saveEl = document.getElementById("save-el");
let count = 0;

function increment() {
    // increasing the count
    count += 1;
    // setting countEl's innerText to the count
    countEl.textContent = count;
}

// displaying back to the document
//countEl.innerHTML = count;

// create a function, save(), which logs out the count when it's called
function save() {
    let prev = count + " - ";
    saveEl.textContent += prev;
    count = 0;
    countEl.textContent = count;
}

// let username = "saurav";
// let message = "You have tree new notifications";

// console.log(username+", "+message);

// let messageToUser = username+", "+message+" !";

// console.log(messageToUser);

// let name = 22; 
// let greeting ="Hi, My name is ";
// let myGreeting = greeting+ name;
// console.log(myGreeting);

// let points = 4;
// let bonusPoints = "10";

// let totalPoints = points+bonusPoints;
// console.log(totalPoints);

// console.log(4+5); // 9 
// console.log("2"+"4"); // 24
// console.log("5" + 1); // 51
// console.log(100 + "100"); // 100100