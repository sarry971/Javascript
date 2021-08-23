let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";


// 1. Store the message-el paragraph in a variable called messageEl
let messageEl = document.getElementById("message-el");

// 2. store the sum paragraph in a variable called sumEl
let sumEl = document.querySelector("#sum-el");

// 3. store the cards paragraph in a variable called cardsEl
let cardsEl = document.querySelector(".cards-el");

let player ={
    name : 'Saurav',
    chips: 150 
}

let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name+": "+player.chips;

// create a function, getRandomCard()
function getRandomCard() {

    let randomCard = Math.floor(Math.random() * 13) + 1; // (0- 12 ) + 1
    if (randomCard === 1) randomCard = 11;
    else if (randomCard > 10) randomCard = 10;
    return randomCard;
}

//  Create a startGame() function
function startGame() {

    isAlive = true;
    // generate random number 

    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = cards[0] + cards[1];
    renderGame();
}
function renderGame() {
    // render the sum on the page using this format -> "Sum : 14"
    sumEl.textContent = "Sum: " + sum;

    // create a loop that renders out all the cards instead of two
    cardsEl.textContent = "Cards :";
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " ";
    }

    if (sum < 21) {
        message = "Do you want to draw a new card? ";
    }
    else if (sum === 21) {
        message = "Wohoo! You've got Blackjack!";
        hasBlackJack = true;
    }
    else {
        message = "You're out of the game!";
        isAlive = false;
    }
    messageEl.textContent = message;
}

// newCard() function that logs out "Drawing new card from deck!"
function newCard() {

    if (isAlive === true  && hasBlackJack === false) {
        // 1. create a card variable and have its value from 2-11;
        let card = getRandomCard();
        // 2. add the new card to the sum variable 
        sum += card;
        cards.push(card)
        console.log(cards)
        // 3. call startGame()
        renderGame();
    }
    
}

console.log(hasBlackJack);
console.log(isAlive);