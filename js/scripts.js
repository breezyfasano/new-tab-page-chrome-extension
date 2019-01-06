'use strict';

function displayTimeOfDay() {
    let time = new Date().getHours();
    if (time >= 0 && time <= 3) return 'evening';
    if (time >= 4 && time <= 11) return 'morning';
    if (time >= 12 && time <= 16) return 'afternoon';
    if (time >= 17 && time <= 24) return 'evening';
    console.log(time);
}

const greeting = document.getElementById('greeting');
greeting.textContent = `Good ${displayTimeOfDay()}, Breezy!`;

fetch("https://quotes.rest/qod.json?category=inspire") // fetching the quote of the day API
.then(response => {
    return response.json();
})
.then(json => {
    // accesses the quote of the day from JSON API, and injects the quote and author into the HTML
    let qod = json.contents.quotes[0];
    const quoteBox = document.querySelector('#qod p');
    const quoteCite = document.querySelector("cite");
    quoteBox.textContent = qod.quote;
    quoteCite.textContent = qod.author;
})
.catch(err => {
    const quoteBox = document.querySelector("#qod p");
    quoteBox.textContent = "Error:" + err;
});