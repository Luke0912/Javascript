const myHeros = ["mum","dad","saumya","himanshu"]

const friends = ["thakur","shivang","chandan"]

// const alhero = myHeros.push(friends)//instead we can use concat

// // const allheros=myHeros.concat(friends)

// console.log(alhero,myHeros);


const all_new = [...myHeros,...friends]
console.log(all_new);


const arr = [1,2,3,[1,2],[3,5,6,7]]

const sabekmeh = arr.flat(Infinity)

console.log(sabekmeh)


console.log(Array.isArray("Shubham"))
console.log(Array.from("Shubham"));
let a = 1
let b = 2
let c = 3
console.log(Array.of(a,b,c));