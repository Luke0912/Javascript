// console.log("1");
// console.log("1");
// console.log("1");
// console.log("1");
// console.log("1");


// above can be easily done with functions

// function addTwoNumbers(number1,number2,number3){
//     console.log(number1 + number2+number3)
// }
// addTwoNumbers(1,2,"a")

// function addTwoNumbers(number1,number2,number3){
//     console.log(number1 + number2+number3)
// }
// const result = addTwoNumbers(1,2,4)
// console.log("result :",result);//we have to return from the function


function addTwoNumbers(number1,number2,number3){
    let result = number1 + number2 + number3
    return result
}
const result = addTwoNumbers(1,2,4)
console.log("result :",result);



const loginUserMessage = (username = "saumya") =>{//this will not be undefined ever
    if(!username){
        return "no user found"
    }
    return `${username}`
}

console.log(loginUserMessage("Shubham"))