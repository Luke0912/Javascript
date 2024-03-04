// filter

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(numbers);


// const myNums = numbers.filter((num)=>num > 4)
// console.log(myNums);

// const myNums = numbers.filter((num)=>{
//     return num > 4
// })//if we use {} it means we start a scope and then we need to return..filter return 
// console.log(myNums);


// lets see hiw we can filter using forEach


// let newNumbers = []

// numbers.forEach((num)=>{
//     if( num  > 4){
//         newNumbers.push(num)
//     }
// })

// console.log(newNumbers)



// ==============================some more filter ops=============================================

    const books = [
        {
          title: "The Great Gatsby",
          genre: "Fiction",
          edition: 1,
          publishDate: 1925
        },
        {
          title: "To Kill a Mockingbird",
          genre: "Classic",
          edition: 2,
          publishDate: 1960
        },
        {
          title: "The Hobbit",
          genre: "Fantasy",
          edition: 3,
          publishDate: 1937
        },
        {
          title: "1984",
          genre: "Dystopian",
          edition: 1,
          publishDate: 1949
        },
        {
          title: "Harry Potter and the Sorcerer's Stone",
          genre: "Fantasy",
          edition: 1,
          publishDate: 1997
        },
        {
          title: "The Catcher in the Rye",
          genre: "Classic",
          edition: 1,
          publishDate: 1951
        },
        {
          title: "Brave New World",
          genre: "Dystopian",
          edition: 2,
          publishDate: 1932
        },
        {
          title: "Lord of the Rings: Fellowship of the Ring",
          genre: "Fantasy",
          edition: 2,
          publishDate: 1954
        },
        {
          title: "Pride and Prejudice",
          genre: "Classic",
          edition: 1,
          publishDate: 1813
        },
        {
          title: "The Hunger Games",
          genre: "Dystopian",
          edition: 1,
          publishDate: 2008
        },
        {
          title: "The Great Gatsby",
          genre: "Fiction",
          edition: 2,
          publishDate: 1925
        },
        {
          title: "To Kill a Mockingbird",
          genre: "Classic",
          edition: 3,
          publishDate: 1960
        }
      ];
      

      const filtered = books.filter((e)=>e.publishDate === 1925)
      console.log(filtered);
      
  