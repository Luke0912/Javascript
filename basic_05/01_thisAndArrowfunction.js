// this keyword ==> refers to current contex

const user = {
    userName : "Shubham",
    price : 999,
    welcomeMessage:function(){
        console.log(`${this.userName},WelCome to website`);
    }
}

// user.welcomeMessage()
// user.userName ="Saumya"
// user.welcomeMessage()

// console.log(this);

//We get {empty obj} when we refer this in node environment..
/* Earlier only the engine which execute js was only found inside browser, now a days we get it in node dino 
and bun etc...browser has window obj and it has lot of things in it*/


// function luke(){
//     let user = "shubham" 
//     console.log(this)  // gives alot of things
//     console.log(this.user);//this is not working here in basic function but working in object
// }//inside function this has also lot of things
// luke()

// const luke = ()=>{
//     let user = "shubham" 
//     console.log(this)   // is empty obj
//     console.log(this.user);//this is not working in arrow also here but working in object
// }//inside function this has also lot of things
// luke()


// -------------------------------------------------------------------------------------------------------------

// Arrow Function

const addOne = (num)=>{
    return num+1
}

console.log(addOne(4));

//implicite return 


const addTw0 = (num1)=> num1 + 1


console.log(addTw0(20));


