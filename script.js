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

    actionButtonPlus.addEventListener("click", handleActionButtonPlusClick)
    actionButtonMinus.addEventListener("click", handleActionButtonMinusClick)
    actionButtonMultiply.addEventListener("click", handleActionButtonMultiplyClick)
    actionButtonEquals.addEventListener("click", handleActionButtonEqualsClick)
    clearButton.addEventListener("click", handleClearButtonClick)
}

function handleNumberButtonClick(event) {
    const lastInputNumber = document.getElementById("last-input-number")
    const resultNumber = document.getElementById("result-number")
    const numberString = event.target.innerText

    currentNumber += numberString

    lastInputNumber.innerHTML = numberString
    resultNumber.innerHTML = currentNumber

}

function handleActionButtonPlusClick(event) {
    lastNumber = currentNumber
    currentNumber = ""
    lastAction = "plus"
}

function handleActionButtonMinusClick(event) {
    lastNumber = currentNumber
    currentNumber = ""
    lastAction = "minus"
}

function handleActionButtonMultiplyClick(event) {
    lastNumber = currentNumber
    currentNumber = ""
    lastAction = "multiply"
}

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

function handleClearButtonClick(event) {
    lastNumber = ""
    currentNumber  = ""
    lastAction  = ""

    const lastInputNumber = document.getElementById("last-input-number")
    const resultNumber = document.getElementById("result-number")

    lastInputNumber.innerHTML = "nothing"
    resultNumber.innerHTML = "0"
}

document.addEventListener("DOMContentLoaded", main)