// HTML Elements IDs
const crapsUsernameInput = "craps-username-input"
const crapsRegistrationPane = "craps-registration-pane"
const crapsMainSection = "craps-main-section"

function registerCrapsPlayer () {
    let crapsUsername = document.getElementById(crapsUsernameInput).value

    // Username validaton check
    let firstCharIsDigitRegex = /^[0-9]|[^a-zA-Z0-9_]/g
    if (crapsUsername.length < 5 || crapsUsername.match(firstCharIsDigitRegex)) {
        alert("Username must be at least 5 characters long, alphanumeric and underscore only, no spaces, and cannot start with a number")
    } else { 
        removeRegistrationPane()
        showMainGameSection()
    }
}


function removeRegistrationPane() {
    document.getElementById(crapsRegistrationPane).style.display = "none"
}

function showMainGameSection() {
    document.getElementById(crapsMainSection).style.display = "block"
}
