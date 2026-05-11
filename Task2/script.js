// Task 1 – Predict the Output
console.log("10" + 5)
console.log(typeof ("10" + 5))

console.log(10 + true)
console.log(typeof (10 + true))

console.log(false + null)
console.log(typeof (false + null))

console.log("Hello" + undefined)
console.log(typeof ("Hello" + undefined))

console.log([1,2] + 5)
console.log(typeof ([1,2] + 5))

// Task 2 – Implicit Type Casting
let value1 = "10" + 5
console.log(value1)
console.log(typeof value1)

let value2 = true + 10
console.log(value2)
console.log(typeof value2)

let value3 = [1,2] + "hello"
console.log(value3)
console.log(typeof value3)

let value4 = ({}) + 5
console.log(value4)
console.log(typeof value4)

let value5 = null + 20
console.log(value5)
console.log(typeof value5)

// Task 3 – Explicit Type Casting
console.log(Number("500"))
console.log(Number(true))
console.log(Number(false))
console.log(Number(null))
console.log(Number("abc"))
console.log(Number([100]))

// Task 4 – Boolean Constructor
console.log(Boolean(""))
console.log(Boolean("javascript"))
console.log(Boolean(0))
console.log(Boolean(1))
console.log(Boolean(null))
console.log(Boolean(undefined))
console.log(Boolean([]))
console.log(Boolean({}))

// Task 5 – Student Pass or Fail
let mark = 45

if(mark > 35){
    console.log("Pass")
}
else{
    console.log("Fail")
}

// Task 6 – Voting Eligibility
let age = 20

if(age >= 18){
    console.log("Eligible")
}
else{
    console.log("Not Eligible")
}

// Task 7 – Greatest Number
let a = 50
let b = 80
let c = 30

if(a > b && a > c){
    console.log("a is greatest")
}
else if(b > a && b > c){
    console.log("b is greatest")
}
else{
    console.log("c is greatest")
}

// Task 8 – Traffic Light System
let signal = "red"

switch(signal){

    case "red":
        console.log("Stop")
        break

    case "yellow":
        console.log("Ready")
        break

    case "green":
        console.log("Go")
        break

    default:
        console.log("Invalid Signal")
}

// Task 9 – Login System
let username = "admin"
let password = "1234"

if(username === "admin"){

    if(password === "1234"){
        console.log("Login Success")
    }
    else{
        console.log("Invalid Login")
    }

}
else{
    console.log("Invalid Login")
}

// Task 10 – Session Finder
let hour = 14

if(hour >= 1 && hour <= 12){
    console.log("Morning")
}
else if(hour >= 13 && hour <= 15){
    console.log("Afternoon")
}
else if(hour >= 16 && hour <= 19){
    console.log("Evening")
}
else if(hour >= 20 && hour <= 24){
    console.log("Night")
}
else{
    console.log("Invalid Time")
}

// Bonus Challenge
console.log(true + true) // 2
console.log("5" - 2) // 3
console.log("5" + 2) // 52
console.log(null + 1) // 1
console.log(undefined + 1) // NaN
console.log(Boolean(" ")) // true
console.log(Number(true)) // 1