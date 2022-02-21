// var paragrapgh = document.getElementById('par')
// paragrapgh.innerHTML = "Change the text"
// console.log(paragrapgh.textContent)

function clickFnc() {
    console.log("Clicked on the nav bar hamburger")
}

 var myFunc = (dob, currentDate) => {
    currentDate = new Date().getFullYear()
    dob = prompt("Enter your Year of birth")
    return currentDate - dob
}

// myFunc()

function getNum(num1, num2) {
    num1 = prompt("Enter the first number")
    num2 = prompt("Enter the second")

    function mul() {
        return num1 * num2
    }
    console.log("Clicked")
   return mul()
}

// const result = getNum()
// console.log(result)

