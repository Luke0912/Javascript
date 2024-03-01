const accountId = 144553; 

let accountEmail = "shubham@gmail.com"

var accountPassword = "123456"

accountCity = "Varanasi"

//-----------------------------------------

// accountId = 983983 // Reassignment to const is not possible ... and it is the only way to write constants

accountEmail = "shubhamdubey@gmail.com" // Reassignment is possible and used to define valriables

accountPassword = "!2343" // Reassignment is possible and used to define valriables

accountCity = "Indore"

console.table([accountEmail,accountId,accountCity,accountPassword]);


// function hello(){
//     let a = "b"
//     var c = "e"
//     if(true){
//         if(true){
//             // let c = """d"
//             console.log("mid",c)
//             var z = "q"
//         }
//     }
//     console.log("last",z);
// }

// hello()


// Prefer not to use var as its problem in functioanl and block scope

// function final(){
//     let a = "121"
//     {
//         var a = "123"
//         console.log(a);
//     }
// }//example of illeagal shadowing

function a(){
    let arr = []
    return ((val)=>{
        arr.push(val)
        console.log(arr);
    })
}

var z = a()
z(5)//concept of clousers