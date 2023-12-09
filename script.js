// add function (copy) to all arrays to return deep copy of array

// here...

const arr = [1, 2, 3];
// const arr2 = arr.copy();
// arr2.push(4);
// console.log(arr); // [1, 2, 3]


const copyArray=()=>{
  const arrayCopy=[...arr]
  arrayCopy[0]=5
  console.log(arrayCopy)
}

copyArray()
console.log(arr)

// let m=JSON.parse(JSON.stringify(arr));

// #####################################################################

const books = [
  { title: "ألف ليلة وليلة", author: "غير معروف", genre: "خيال", pages: 1001 },
  { title: "الحمار الطيار", author: "توفيق", genre: "رواية", pages: 120 },
  { title: "زهرة في الكون", author: "نجيب محفوظ", genre: "رواية", pages: 320 },
  { title: "الأيام", author: "تحسين الطاهر", genre: "سيرة ذاتية", pages: 400 },
];

function getBooksByGenre(books,genre) {
  let booksTitle = books.filter(function (book) {
    return book.genre === genre;
}).map(function (book) {
    return book.title;
})

return {"genre":genre,"books":booksTitle}
  
 }


console.log(getBooksByGenre( books,"رواية"));
/*
Output:

{
  genre: 'رواية',
  books: [ 'الحمار الطيار', 'زهرة في الكون' ]
}
*/

