// ==========Object Literal===============

 user = {
    userName:"hitesh",
    loginCount: 9,
    signedIn : true,
    getUserDetails:function(){
        console.log("Hii");
    }
}// this is litteraly object==>inside the all re propertis.also with meathods.

console.log(user.userName);
console.log(user.getUserDetails());

// this is current context

// ===========Constructor Function=============

// const promiseOne = new Promise()
// const date = new Date()

// this is empty obj = {}

function User(userName, loginCount, isloggedIn){
    this.userName = userName;
    this.loginCount = loginCount;
    this.isloggedIn = isloggedIn

    // return this// this does not matter.
}

// const userOne =  User("shubham",12,true)
//const userTwo = User("Himanshu",1132,true)//this will over write the value of userOne

// =================BUT===========================

const userOne = new User("Himanshu",1132,true)//new here will give new Instance/copy of User..now do what you want
const userTwo = new User("Shubham",1132,false)


console.log(userOne.constructor,userTwo);


// new key word == this will generate a new object 
//  constructior function is called due to new keywrod
// ARGS GET INJECTED AND ADDED TO THIS