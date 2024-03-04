// forEach

//const fruits = ["apple", "banana", "orange", "grape", "kiwi"];

//fruits.forEach(function fruit(){})//we know callback does not have name


// fruits.forEach(function (val){
//     console.log(val);
// })// this is the one way


// fruits.forEach((val)=>{
//     console.log(val);
// })//another way


// function printMe(item){
//     console.log(item);
// }
// fruits.forEach(printMe)//printme


// fruits.forEach((item, index, arr )=>{
//     console.log(item, index, arr);
// })//for each can accept all these arrguments


// const people = [
//     { name: "Alice", age: 25, city: "Wonderland" },
//     { name: "Bob", age: 30, city: "Exampleville" },
//     { name: "Charlie", age: 28, city: "Cityburg" },
//     { name: "Diana", age: 35, city: "Metropolis" }
//   ];


//   people.forEach((item)=>{
//     console.log(item.name);
//   })


const people = [
    { name: "Alice", age: 25, city: "Wonderland" },
    { name: "Bob", age: 30, city: "Exampleville" },
    { name: "Charlie", age: 28, city: "Cityburg" },
    { name: "Diana", age: 35, city: "Metropolis" }
  ];
  

//   const values = people.forEach((val)=>{
//     console.log(val);//we will get these values
//   })

//   console.log(values);//but we will not get these values because forEach doesnot returns any thing

//   const values = people.forEach((val)=>{
//     console.log(val);//we will get these values
//     return val;
//   })

//   console.log(values);


// Certainly! Let's consider a real use case for the forEach method. Suppose you have an array of transactions, 
// and you want to calculate the total amount of money spent. Each transaction
//  is represented as an object with a amount property. Here's how you could use forEach for this scenario:


const transactions = [
  { description: "Groceries", amount: 50 },
  { description: "Dinner", amount: 30 },
  { description: "Clothing", amount: 80 },
  { description: "Books", amount: 20 }
];

let totalAmount = 0;

transactions.forEach(function(transaction) {
  totalAmount += transaction.amount;
});

// now we can use this total amount any where

// The primary purpose of forEach is to iterate over the elements of an array and perform 
// a specified action for each element. It's commonly used for tasks such as logging elements, 
// modifying the original array in place, or triggering some side effect for each element.

