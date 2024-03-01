// function calculateCartPrice(...num1){//...is rest operator and also spread operator depends on the useCase
//     return num1
// }

// console.log(calculateCartPrice(200,300,400,500));

//How to use rest operator

// function calculateCartPrice(va1,val2,...num1){//...is rest operator and took num1 and left out is val1 an val2
//     return num1
// }

// console.log(calculateCartPrice(200,300,400,500));


const user = {
    username : "Shubham",
    price : 1234
}
 
function handleObject(anyObj){
    console.log(`username is ${user.username} and price is ${user.price}`);
}

// console.log(handleObject(user));

console.log(handleObject( {
    username : "Shubham",
    price : 1234
}));


const newArray = [1,2,3,4]

function returnValue(anyArray){
    return anyArray[1]
}

console.log(returnValue(newArray));