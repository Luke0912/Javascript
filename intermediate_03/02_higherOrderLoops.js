// for in 

// object based

//gives keys

//we cannot use for in new Map()

const person = {
    name: "John Doe",
    age: 30,
    city: "Exampleville",
    isAdmin: false,
    hobbies: ["reading", "coding", "traveling"]
  };
  
for (const key in person) {
    console.log(person[key]);
}

const fruits = ["apple", "banana", "orange", "grape", "kiwi"];


for (const key in  fruits) {
    console.log(fruits[key]);
}

//so from here we get to know that array has keys and they start from 0...
//but in object we can keep what ever key we want
//for in loop works on array gives keys ...when used on array we can get value using fruits[key]


const map = new Map()
map.set('In',"India")
map.set('UAE','Dubai')

for (const key in map) {
    console.log(key)
}

// here not itteratabale

   