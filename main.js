//addition
function sum(x, y) {
    return x + y
}
console.log(sum(2, 4))


//multiplication
//1. Write a function named "multiply" which takes 
//two arguments (as input variables) and returns their product.
//2. you will use a FOR loop which calls your add function from the first kata.
//For example, calling multiply(6, 4) should return a result of 24, 
//which could be expressed by adding 6 to itself 4 times:
 
function multiply (x, y) {
    let total = 0
    for (let i = 0; i < y; i ++) {
      total = sum(x, total)  
    }
    return total
}
console.log(multiply(6, 4))






//power/exponential
//1. Write a function named "power" which takes two arguments ( x and n) 
//and returns the the result of raising x to the nth power.
//For example, if we called power(2, 8), we should return 
//256 by multiplying 2 by itself 8 times:

//And to achieve the correct result for power(3, 4), we would want to multiply 3 by itself 4 times:

// 3 * 3 * 3 * 3 = 81

function power (x, y ) {
    let total = 1
    for (let i= 0; i < y; i += 1) {
        total = multiply(x, total)
    }
    return total
}


console.log(power(2,8))




//Factorial
// 1. Write a function named "factorial" which takes a single argument and returns 
//the factorial of that value.

//A factorial multiplies a given number by every number below it. For example, "5 factorial" (usually symbolized by 5! in Mathematics) would be:
// 5 * 4 * 3 * 2 * 1 = 120
// For example, calling factorial(4) should return a result of 24.
// I took code from freecodecamp.org
function factorial (n) {
    let num = 1
    for(let i = n ; i > 1; i-- ) {
       num = multiply(i, num)
    }
    return num
}
console.log(factorial(5))