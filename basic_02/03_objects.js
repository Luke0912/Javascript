//Singleton and Literals these are the ways to define objects

//Object Literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Shubahm Dubey",
    "just name":"Shubham",
    [mySym]:"hii",//proper syntax to use symbol as a key,without normal brackets it will be a normal key
    age :  54,
    email : "shubhamdubey.dubey4@gmail.com",
    isLoggedIn : true,
    lastLoginDays : ["Monday","Saturday"]
}
console.log('JsUser: ', JsUser["just name"]);//this cannon be used with . notation
console.log('JsUser: ', JsUser['email']);//cannot be used without quotes
console.log('JsUser: ', JsUser[mySym]);



//Change values

JsUser.email = "newShubham@gmail.com"


JsUser.greetings = function(){
    console.log("Hello js user");
}

JsUser.greetingsTwo = function(){
    console.log(`Hello js user ${this["just name"]}` );
}
console.log('JsUser: ', JsUser.greetingsTwo());