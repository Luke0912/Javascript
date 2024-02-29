// let name = "Shubham"
// console.log(name[1]);

// console.log(typeof name);
// console.log(name[1]);
// console.log(name.length);
// console.log(name.toUpperCase());
// console.log(name.charAt(2));
// console.log(name.indexOf('D'));
// ----------------------------------------------------------------------------------------------------
// const repoCount = 50 

// console.log(name + repoCount + "value");

// console.log(`hello my name is ${name} and repo count is ${repoCount}`)


// -----------------------------------------------------------------------------------------------------

const gameName = new String("ShubhamDubey")
// console.log(typeof gameName);
// console.log(gameName[1]);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());

// here we see due to upper case there is change but it will not reflect in orinal because we change its copynot in original
// as per the theory of memory

// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('D'));


const newString = gameName.substring(1,4)// subString(start,end) end val is exluded, -ive val cannot be provide at start
console.log(newString);

const anotherString = gameName.slice(-10,4)// subString(start,end) end val is exluded, if provided -ive val it will star 
console.log(anotherString);


const newStringOne = "   shubh    "
console.log(newStringOne);

// console.log(newStringOne.trim()); there is trim start and trim end too

const newStringTwo = "hello%go"
console.log(newStringTwo.replace("%","i"));

const newStringThree = "hello%go"
console.log(newStringThree.includes("i"));

const newStringFour = "hellogo"
console.log(newStringFour.split("o"));//divides this string into an ordered list of substrings by searching for the pattern in string, 