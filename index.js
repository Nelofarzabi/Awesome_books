const bookListContainer = document.querySelector('.book-list');
const titleInput = document.querySelector('.title');
const authorInput = document.querySelector('.author');
const form = document.querySelector('form');
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
  bookListContainer.innerHTML = '';
  const bookElement = bookList.map((book) => {
    const bookCard = `<li>
    <p>${book.title}</p>
    <p>${book.author}</p>
    <button id=${book.id}>Remove</button>
  </li>`;
  return bookCard;
  }).join('')
  bookListContainer.insertAdjacentHTML('beforeend',bookElement);
}
displayBook();

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const id = Math.floor(Math.random() * 1000);
  const title = titleInput.value;
  const author = authorInput.value;
  addBook(title, author, id);
  displayBook();
})