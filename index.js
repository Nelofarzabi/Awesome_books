let bookList = [
  {
    title: 'The five love languages',
    author: 'Gary Chapman',
    id: 1,
  },
  {
    title: 'How to influence people',
    author: 'Dale Carnegie',
    id: 2,
  },
  {
    title: 'The river',
    author: 'Nelofar Zabi',
    id: 3,
  },
];

function addBook(title , author, id){
   const newBook = {title , author, id};
   bookList.push(newBook);
}

function removeBook(id) {
  bookList = bookList.filter(book => book.id !== id);
}
