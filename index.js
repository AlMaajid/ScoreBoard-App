const homeResultEl = document.getElementById('homeResult');
const guestResultEl = document.getElementById('guestResult');
let countHome = 0;
let countGuest = 0

function homeIncrementOne() {
    countHome += 1;
    homeResultEl.textContent = countHome;
}

function homeIncrementTwo() {
    countHome += 2;
    homeResultEl.textContent = countHome;

}

function homeIncrementThree() {
    countHome += 3;
    homeResultEl.textContent = countHome;
}

function guestIncrementOne() {
    countGuest += 1;
    guestResultEl.textContent = countGuest;
}

function guestIncrementTwo() {
    countGuest += 2;
    guestResultEl.textContent = countGuest;

}

function guestIncrementThree() {
    countGuest += 3;
    guestResultEl.textContent = countGuest;
}

function reset() {
    countHome = 0;
    countGuest = 0;
    guestResultEl.textContent = countGuest;
    homeResultEl.textContent = countHome;
}