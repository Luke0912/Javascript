const myNumbers = [1,2,3,4,5,6,7,8]


const total = myNumbers.reduce((acc,curVa)=>{
    return acc+curVa
},0)


// the way it works here is first time acc dont know wherer to start,so we pass some initial val after CB,only for first time.

//and after first return ,, return value gets saved in acc and then it continues the operation.

console.log(total);