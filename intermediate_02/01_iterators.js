//for

// for (let i = 0; i <= 10; i++) {
//     //curly braces have there own block
//     const element = i;
//     if(element == 5 ){
//         console.log("5 is best");
//     }
//     console.log(element);
// }
// if checking fails code comes here



// for (let i = 0; i <= 3; i++) {
//     console.log(`outer loop ${i}`);
//     for (let j = 0; j <= 3; j++) {
//         console.log(`inner loop ${j} outer loop ${i}`);
//     } 
// }


// let array = ['shubham','saumya','himanshu']
// for (let index = 0; index <= array.length - 1; index++) {
//     console.log(array[index]);
    
// }

//______________________break and continue______________________

for (let index = 0; index <= 20; index++) {
    if(index === 5){
        console.log("Detected 5");
        break;
    }
    console.log(`value of i is ${index}`);
}
console.log("iterations over");



for (let index = 0; index <= 20; index++) {
    if(index === 5){
        console.log("Detected 5");
        //iterations skip for demanded conditions
        continue;
    }
    console.log(`value of i is ${index}`);
}
console.log("iterations over");