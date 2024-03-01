let a = 10
const b = 20
var c = 30

// console.log(a);
// console.log(b);
// console.log(c);


// var does not work with block scope

// {}==>this is scope

var c = 20

if(true){
    let a = 10
    const b = 20
    var c = 30// c will now giv 30..no matter about 20 is now rewritten
}
// console.log(a);
// console.log(b);
// console.log(c);

/*what ever is written in global scope it is available in scope..but if written in scope it shoule bot be avail 
in global
*/

// let outer = 90

// if(true){
//     let inner = 10
//     console.log("inner:",inner);
//     const b = 20
    
// }

// console.log("outer:",outer);//as we can see now nothing is getting overwritten




