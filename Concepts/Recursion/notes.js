// Recursion

// This is a function that calls itself
// For example
// const chicken = ()=>{
//     chicken()
// }

// In the function above, it will continue executing infinately until the maximum callstack is exceeded
// In order to stop this, we need a base case

// let counter = 0
// const chicken = ()=>{
//     console.log(counter)
//     if (counter > 3) {
//         return "done"
//     }
//     counter++
//     return chicken()
// }

// NB: Always return a recusive function so that it may bubble down and pop the stack
// console.log(chicken())

// Rule of thumb for Recursion
// 1. Identify the base case and return the value
// 2. Identify the recursvie function
// 3. Always return when needed

// Exercises
// Factorials
// Recursion
// let answer = 1
// const factorial = (value) =>{
//     if (value === 2) {
//         return value
//     }
//     return value * factorial(value-1)
// }

// console.log(factorial(5))

//Iteration

// let answer = 1
// for(i=1;i<=5;i++){
//     answer = i*answer
// }

// console.log(answer)

//Fibonacci
