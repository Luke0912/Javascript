//for of
// array based

// ["","",""]
// [{},{},{}]

const arr = [1,2,3,4]

// for (const num of object){//object here means any thing not pointing to js objects

// }

for (const num of arr) {
    console.log(num)
}

const greetings = "hello world"

for (const iterator of greetings) {
    console.log(iterator)
}


// here it does not give index

//Maps
// map is a object ...holds key value pairs..no duplicate....maintaine the order of entry

const map = new Map()
map.set('In',"India")
map.set('UAE','Dubai')

console.log(map)


for (const [key,value] of map) {
    console.log(key, "hii", value)
}


// const obj  = {
//     'game1': 'NFS',
//     'game2': 'forza'
// }

// for (const iterator of obj) {
//     console.log(iterator)
// }//for of loop is not workin in object but it works in map