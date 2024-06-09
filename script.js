// Variables used in multiple functions
let lastNumber = ""
let currentNumber = ""
let lastAction = ""

function main() {
    // Save the reference the action button plus
    const actionButtonPlus = document.getElementById("action-plus") 

    // Save the reference the action buttons
    const actionButtonMinus = document.getElementById("action-minus")
    const actionButtonMultiply = document.getElementById("action-multiply")
    const actionButtonEquals = document.getElementById("action-equals")
    const clearButton = document.getElementById("clear")
    
    // Save the references to the number buttons
    // Since there's 10 and fetched by class name, the result will be an array
    const numberButtons = document.getElementsByClassName("button number")

    // Loop through every number button
    for (let i = 0; i < numberButtons.length; i++) {
        // Add an event listener when any number button is clicked and continue to the function named "handleNumberButtonClick"
        numberButtons[i].addEventListener("click", handleNumberButtonClick)
    }

    // Adds event listener when clear and action buttons are clicked and continues to their functions
    actionButtonPlus.addEventListener("click", handleActionButtonPlusClick)
    actionButtonMinus.addEventListener("click", handleActionButtonMinusClick)
    actionButtonMultiply.addEventListener("click", handleActionButtonMultiplyClick)
    actionButtonEquals.addEventListener("click", handleActionButtonEqualsClick)
    clearButton.addEventListener("click", handleClearButtonClick)
}

// Below are button click functions separated from the main to improve readability.
// Updates last input number and result number field with the clicked number.
function handleNumberButtonClick(event) {
    const lastInputNumber = document.getElementById("last-input-number")
    const resultNumber = document.getElementById("result-number")
    const numberString = event.target.innerText

    currentNumber += numberString

    lastInputNumber.innerHTML = numberString
    resultNumber.innerHTML = currentNumber
}

// Updates last input number and result number field with the clicked number.
function handleActionButtonPlusClick(event) {
    lastNumber = currentNumber
    currentNumber = ""
    lastAction = "plus"
}

// Updates last input number and result number field with the clicked number.
function handleActionButtonMinusClick(event) {
    lastNumber = currentNumber
    currentNumber = ""
    lastAction = "minus"
}

// Updates last input number and result number field with the clicked number.
function handleActionButtonMultiplyClick(event) {
    lastNumber = currentNumber
    currentNumber = ""
    lastAction = "multiply"
}

// Calculates both numbers based on the clicked action
function handleActionButtonEqualsClick(event) {
    console.log("Equals Button Clicked")
    console.log(lastNumber, currentNumber, lastAction)

    const lastNumberInt = parseInt(lastNumber)
    const currentNumberInt = parseInt(currentNumber)

    const resultNumber = document.getElementById("result-number")

    if (lastAction === "plus") {
        resultNumber.innerHTML = lastNumberInt + currentNumberInt
    } else if (lastAction === "minus") {
        resultNumber.innerHTML = lastNumberInt - currentNumberInt
    } else if (lastAction === "multiply") {
        resultNumber.innerHTML = lastNumberInt * currentNumberInt
    }
}

// Clears all data and restarts the calculator
function handleClearButtonClick(event) {
    lastNumber = ""
    currentNumber  = ""
    lastAction  = ""

    const lastInputNumber = document.getElementById("last-input-number")
    const resultNumber = document.getElementById("result-number")

    lastInputNumber.innerHTML = "nothing"
    resultNumber.innerHTML = "0"
}

// Since the script is loaded in head, the body content has not been loaded yet. 
// Wait until the full body is loaded to prevent "null" references
// Source: https://developer.mozilla.org/en-US/docs/Web/API/Document/DOMContentLoaded_event
document.addEventListener("DOMContentLoaded", main)