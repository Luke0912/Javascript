//nested scope
// function one(){
//     const username = "shubham"

//     function two(){
//         const website = "dev"
//         console.log(username);
//     }
//     console.log(website);//in this case two never got executed 
//     two()
// }
// one()

/* */


// if(true){
//     const username = "shubham"
//     if(username === "shubham"){
//         const website = "dev"
//         console.log("mee:",username + website);
//     }
//     console.log(website);
// }
// console.log(username);//example of scoping


// In js variables are very powerfull the can also hold function and that is called expression
//lets see an example

// addOne(2)
// function addOne(num){
//     return num+1
// }

// addTwo(3)
// const addTwo = function(num){
//     return num+1
// }//will be coverd in execution contex and hoisting