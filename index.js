
let HomeScoreEl = document.getElementById("main-home")
let GuestScoreEl = document.getElementById("main-guest")


let homeScore = 0;
function homePlus1() {
    homeScore += 1
    HomeScoreEl.innerText  = homeScore
}

function homePlus2() {
    homeScore += 2
    HomeScoreEl.innerText  = homeScore
}

function homePlus3() {
    homeScore += 3
    HomeScoreEl.innerText  = homeScore
}

let guestScore = 0;
function guestPlus1() {
    guestScore += 1
    GuestScoreEl.innerText  = guestScore
}

function guestPlus2() {
    guestScore += 2
    GuestScoreEl.innerText  = guestScore
}

function guestPlus3() {
    guestScore += 3
    GuestScoreEl.innerText  = guestScore
}