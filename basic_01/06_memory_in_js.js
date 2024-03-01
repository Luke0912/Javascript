// type of memory

// Stack (primitive)
// Heap (Non-Primitive)

// stack = we get copy==> consider it at a book over another book
let aName = "shubham"

let bName = aName
//we said bName value will be given by aName we get a copy in a stack and that is changed and original
// remains unchaged 

bName =  "saumya"

console.log(aName);
console.log(bName);




//heap = we get reference ==> consider it as a big bag

let userOne = {
    email : "shubham@gmail.com",
    upi : "some@ubi"

}
// above user One is declared in stack but it ref is in heap

// when we say 
 let userTwo = userOne

//  userTwo variable is declared in stack but is point to same ref in heap 

userTwo.email = "shubhamm@hotmail.com"

// and therefore the if we change in userTwo we see changes in userOne

console.log(userOne,userTwo);