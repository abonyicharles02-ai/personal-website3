// Craps Main Data
let crapsUsername = ""

// Craps Game Settings
const startingMoney = 1000
const startingRounds = 0
const bets = {
    even: "EVEN",
    odd: "ODD"
}
const minimumBet = 100

// HTML Elements IDs
const crapsUsernameInput = "craps-username-input"
const crapsRegistrationPane = "craps-registration-pane"
const crapsMainSection = "craps-main-section"
const crapsStatsUsername = "craps-stats-username"
const crapsStatsMoney = "craps-stats-money"
const crapsStatsRounds = "craps-stats-rounds"
const crapsUserBetAmount = "craps-user-bet-amount"

// In-game variables
let currentRounds = startingRounds
let currentMoney = startingMoney
let currentBet = bets.even
let currentBetAmount = minimumBet

function registerCrapsPlayer () {
    crapsUsername = document.getElementById(crapsUsernameInput).value

    // Username validaton check
    let firstCharIsDigitRegex = /^[0-9]|[^a-zA-Z0-9_]/g
    if (crapsUsername.length < 5 || crapsUsername.match(firstCharIsDigitRegex)) {
        alert("Username must be at least 5 characters long, alphanumeric and underscore only, no spaces, and cannot start with a number")
    } else { 
        removeRegistrationPane()
        showMainGameSection()
        setupFirstRound()
    }
}

function removeRegistrationPane() {
    document.getElementById(crapsRegistrationPane).style.display = "none"
}

function showMainGameSection() {
    document.getElementById(crapsMainSection).style.display = "block"
}

function setupFirstRound() {
    document.getElementById("craps-stats-username").innerHTML = crapsUsername
    currentMoney = startingMoney
    currentRounds = startingRounds
    setMoney(startingMoney)
    setRounds(currentRounds)
    betEven()
    setBetAmount(minimumBet)
}

function setMoney (money) {
    document.getElementById(crapsStatsMoney).innerHTML = money
}

function setRounds (rounds) {
    document.getElementById(crapsStatsRounds).innerHTML = rounds
}

function betEven () {
    chooseBet(bets.even)
}

function betOdd () {
    chooseBet(bets.odd)
}


function chooseBet (bet) {
    currentBet = bet
    document.getElementById(bet).style.backgroundColor = "red"
    const deselectBet = bet == bets.even ? bets.odd : bets.even
    document.getElementById(deselectBet).style.backgroundColor = "transparent"
}

function increaseBet () {
    setBetAmount(Math.min(currentBetAmount + minimumBet, currentMoney))
}

function decreaseBet () {
    setBetAmount( Math.max(currentBetAmount - minimumBet, minimumBet))
}

function setBetAmount (betAmount) {
    currentBetAmount = betAmount
    document.getElementById(crapsUserBetAmount).innerHTML = "$" + betAmount
}