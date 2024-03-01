//Singleton Object type declaration 

const instaUser = {}

instaUser.id = "1234js"
instaUser.name = "Shubham Dubey"
instaUser.isLoggedIn = false

console.log(instaUser);

const regularUser = {
    email : "shubhma@gmail.com",
    details: {
        userfullname:{
            firstname: "Shubham",
            lastname:"Dubey"
        },
        address:{
            city:"Varanasi",
            pincode:"221005"
        }
    },
    id : "1234456"
}

console.log(regularUser.details?.address);//optional chaining


//Object.assign

const target = {a:1,b:2}
const source = {c:3,d:4}

const main = Object.assign({},target,source)//{}==> this is main target

const mainuse = {...target,...source}
console.log(main,mainuse);


// const user = [
//     {...},{...},
// ]we can loop on this and or get the static value as user[1].email



console.log(Object.keys(regularUser));
console.log(Object.values(regularUser));

console.log(instaUser.hasOwnProperty("isLoggedIn"));
