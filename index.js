const bookListContainer = document.querySelector('.book-list');

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

function displayBook() {
  const bookElement = bookList.map((book) => {
    const bookCard = `<li>
    <p>${book.title}</p>
    <p>${book.author}</p>
    <button>Remove</button>
  </li>`;
  return bookCard;
  }).join('')
  bookListContainer.insertAdjacentHTML('beforeend',bookElement);
}
displayBook();
