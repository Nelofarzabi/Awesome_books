const bookList = [
  {
    title: 'The five love languages',
    author: 'Gary Chapman',
  },
  {
    title: 'How to influence people',
    author: 'Dale Carnegie',
  },
  {
    title: 'The river',
    author: 'Nelofar Zabi',
  },
];

function addBook(title , author){
   const newBook = {title , author};
   bookList.push(newBook);
}