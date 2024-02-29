// const myArr = [0,1,2,3,4,5] // 0 based indexing

// copy Operation in array gives Shallow copies


//Shallow Copy:-Shared same ref point
//Deep Copy: do not share same ref point

//MEATHODS

// const myHeros = ["Himanshu","Thakur","Saumya"]

// const myArr2 = new Array(1,2,3,4,5)
// myArr2.push(6)
// myArr2.pop(6)
// myArr2.unshift(9)
// myArr2.shift()


// console.log(myArr.includes(9));
// console.log(myArr.indexOf(0));
// console.log(myArr.join());
// console.log(typeof myArr.join());

// Slice,Splice


const myArr = [0,1,2,3,4,5]

console.log("A",myArr);

//const myn1 = myArr.slice(0,3) // last is ignored
const myn2 = myArr.slice(1,3) 

//const myn3 = myArr.splice(0,3) // splice manipulates the arr
const myn4 = myArr.splice(0,3) //splice manipulates the arr and last is included

console.log("B",myn2,myn4);

console.log("C",myArr);

